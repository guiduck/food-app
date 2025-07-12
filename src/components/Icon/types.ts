import { SVGProps } from "react";

export interface Icon {
  path: SVGProps<SVGPathElement>;
  size?: number;
  viewBox?: string;
  color?: string;
  onClick?: () => void;
}

export interface ExtendedIcon {
  color?: string;
  secondaryColor?: string;
  size?: number;
  onClick?: () => void;
}
