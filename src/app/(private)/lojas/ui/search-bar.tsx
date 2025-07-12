"use client";

import SearchBar from "@/components/SearchBar";
import { useSearchStore } from "@/stores/search-store";
import { useEffect, useState } from "react";

interface HomeSearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function HomeSearchBar({
  placeholder = "busque pela loja ou culinária",
  className = "",
}: HomeSearchBarProps) {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const [localValue, setLocalValue] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, setSearchTerm]);

  useEffect(() => {
    setLocalValue(searchTerm);
  }, [searchTerm]);

  return (
    <SearchBar
      value={localValue}
      onChange={setLocalValue}
      placeholder={placeholder}
      className={className}
    />
  );
}
