import React from "react";
import { FooterProps } from "./types";

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      className={`bg-neutral-100 border-t border-border py-l px-l ${className}`}
    >
      <div className="text-center space-y-xs">
        <p className="text-primary-dark font-bold text-s">
          feito com <span className="text-primary-dark text-m">💜</span> em
          maringá-PR
        </p>
        <div>
          <p className="text-primary-dark font-bold text-s">
            aiqfome.com © 2007-2023 aiqfome LTDA .
          </p>
          <span className="text-primary-dark font-bold text-s">
            CNPJ: 09.186.786/0001-58 •
          </span>
          <a
            href="/design-system"
            className="hover:text-primary transition-colors cursor-pointer"
            title="Easter egg: Design system showcase"
          >
            {" "}
            🎨
          </a>
        </div>
      </div>
    </footer>
  );
}
