"use client";

import React, { useState } from "react";
import { SearchBarProps } from "./types";
import { SearchIcon } from "../Icon";

export default function SearchBar({
  placeholder = "busque pela loja ou culinária",
  value: controlledValue,
  onChange,
  onSubmit,
  className = "",
  disabled = false,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("");

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="relative">
        <div className="absolute left-s top-1/2 transform -translate-y-1/2 text-neutral-400">
          <SearchIcon size={24} />
        </div>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            h-10
            w-full
            bg-neutral-0
            border-0
            rounded-m
            pl-11
            pr-m
            font-semibold
            text-text-primary
            placeholder:text-neutral-600
            focus:outline-none
            focus:ring-2
            focus:ring-primary
            focus:ring-opacity-50
            disabled:opacity-50
            disabled:cursor-not-allowed
            text-s
          `}
        />
      </div>
    </form>
  );
}
