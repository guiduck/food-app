"use client";

import { HeartIcon } from "@/components/Icon";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function FavoriteButton({ storeSlug }: { storeSlug: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites") || "[]";
    const favorites = JSON.parse(storedFavorites);
    setIsFavorite(favorites.includes(storeSlug));
  }, [storeSlug]);

  const handleSaveFavorite = () => {
    try {
      const storedFavorites = localStorage.getItem("favorites") || "[]";
      const favorites = JSON.parse(storedFavorites);

      if (!favorites.includes(storeSlug)) {
        favorites.push(storeSlug);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(true);
        return;
      }

      const newFavorites = favorites.filter(
        (favorite: string) => favorite !== storeSlug
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } catch (error) {
      toast.error("Erro ao salvar favorito");
    }
  };

  return (
    <button
      onClick={handleSaveFavorite}
      className={isFavorite ? "text-primary-text" : "text-neutral-400"}
    >
      <HeartIcon
        size={24}
        color={isFavorite ? "currentColor" : "none"}
        secondaryColor="currentColor"
      />
    </button>
  );
}
