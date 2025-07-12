"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CheckIcon } from "@/components/Icon";
import { RadioGroup } from "@/components/RadioGroup";
import { saveLocation } from "@/actions/location";
import { LocationData } from "@/types/location";

export function LocationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [locationMode, setLocationMode] = useState("current");
  const [manualAddress, setManualAddress] = useState("");
  const router = useRouter();

  const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch address");
      }

      const data = await response.json();

      const address = data.address;
      const components = [];

      if (address.house_number && address.road) {
        components.push(`${address.road}, ${address.house_number}`);
      } else if (address.road) {
        components.push(address.road);
      }

      if (address.neighbourhood) {
        components.push(address.neighbourhood);
      }

      if (address.city || address.town || address.village) {
        components.push(address.city || address.town || address.village);
      }

      if (address.state) {
        components.push(address.state);
      }

      return components.join(", ") || data.display_name;
    } catch (error) {
      throw new Error("Não foi possível obter o endereço");
    }
  };

  const handleSaveLocationAndRedirect = async (locationData: LocationData) => {
    try {
      await saveLocation(locationData);
      toast.success("Localização salva com sucesso!");
      router.push("/lojas");
    } catch (error) {
      toast.error("Erro ao salvar localização");
    }
  };

  const handleCurrentLocation = () => {
    setIsLoading(true);

    if (!navigator.geolocation) {
      toast.error("Geolocalização não é suportada neste navegador");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const address = await reverseGeocode(latitude, longitude);

          const locationData: LocationData = {
            address,
            latitude,
            longitude,
          };

          await handleSaveLocationAndRedirect(locationData);
        } catch (error) {
          toast.error("Erro ao processar localização");
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        let errorMessage = "Erro ao obter localização";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Permissão de localização negada";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Localização indisponível";
            break;
          case error.TIMEOUT:
            errorMessage = "Timeout ao obter localização";
            break;
        }

        toast.error(errorMessage);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const handleManualAddress = () => {
    if (!manualAddress.trim()) {
      toast.error("Por favor, digite um endereço");
      return;
    }

    setIsLoading(true);

    const locationData: LocationData = {
      address: manualAddress.trim(),
      latitude: 0,
      longitude: 0,
    };

    setTimeout(async () => {
      await handleSaveLocationAndRedirect(locationData);
      setIsLoading(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (locationMode === "current") {
      handleCurrentLocation();
    } else {
      handleManualAddress();
    }
  };

  const locationOptions = [
    {
      value: "current",
      label: "Usar localização atual",
      description: "Obter automaticamente sua localização atual",
    },
    {
      value: "manual",
      label: "Digitar endereço",
      description: "Inserir manualmente seu endereço",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <RadioGroup
        options={locationOptions}
        value={locationMode}
        onValueChange={setLocationMode}
        name="locationMode"
        title="Como você gostaria de definir sua localização?"
        required
      />

      <div className="space-y-2">
        <Label htmlFor="address" className="text-text-primary font-medium">
          Digite seu endereço
        </Label>
        <Input
          id="address"
          type="text"
          placeholder="Ex: Rua das Flores, 123 - Centro"
          value={manualAddress}
          disabled={locationMode !== "manual"}
          onChange={(e) => setManualAddress(e.target.value)}
          className="w-full"
          required={locationMode === "manual"}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            {locationMode === "current"
              ? "Obtendo localização..."
              : "Salvando..."}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <CheckIcon color="#FFFFFF" size={16} />
            Continuar
          </div>
        )}
      </Button>
      <p className="text-xs text-text-secondary text-center">
        Sua localização será usada apenas para mostrar restaurantes próximos
      </p>
    </form>
  );
}
