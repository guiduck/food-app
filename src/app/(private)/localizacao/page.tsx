import nextDynamic from "next/dynamic";
import { LocationForm } from "./ui/form-location";

const ThemeToggle = nextDynamic(() => import("@/components/ui/theme-toggle"), {
  ssr: true,
});

export default function LocationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-end items-center mb-4">
          <ThemeToggle small />
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-text-primary">
            Onde você está?
          </h1>
          <p className="text-text-secondary">
            Precisamos saber sua localização para mostrar os restaurantes
            próximos
          </p>
        </div>

        <LocationForm />
      </div>
    </div>
  );
}
