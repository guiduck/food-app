"use client";

import React, { useEffect, useState } from "react";
import { FavIcon, AvatarIcon } from "@/components/Icon";
import { HeaderProps } from "./types";
import AddressLine from "./address-line";
import Link from "next/link";
import { LocationData } from "@/types/location";

export const Header: React.FC<HeaderProps> = ({
  address: propAddress,
  addressLine2 = "entregando em",
  className = "",
}) => {
  const [userLocation, setUserLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const locationCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user_location="));

    if (!locationCookie) return;

    const locationValue = locationCookie.split("=")[1];
    const decodedValue = decodeURIComponent(locationValue);
    const location = JSON.parse(decodedValue) as LocationData;
    setUserLocation(location);
  }, []);

  const displayAddress =
    propAddress || userLocation?.address || "Rua Mandaguari, 198";

  return (
    <header
      className={`bg-primary dark:bg-primary-dark text-primary-foreground ${className}`}
    >
      <div className="flex items-center justify-between px-l py-m">
        <div className="flex items-center gap-m">
          <div className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <Link href="/">
              <FavIcon size={32} color="white" />
            </Link>
          </div>

          <AddressLine
            href="/localizacao"
            addressLine2={addressLine2}
            address={displayAddress}
          />
        </div>

        <AvatarIcon size={24} color="white" />
      </div>
    </header>
  );
};

export default Header;
