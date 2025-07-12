import React from "react";
import { FavIcon, AvatarIcon } from "@/components/Icon";
import { HeaderProps } from "./types";
import AddressLine from "./address-line";
import Link from "next/link";

export const Header: React.FC<HeaderProps> = ({
  address = "Rua Mandaguari, 198",
  addressLine2 = "entregando em",
  className = "",
}) => {
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
            address={address}
          />
        </div>

        <AvatarIcon size={24} color="white" />
      </div>
    </header>
  );
};

export default Header;
