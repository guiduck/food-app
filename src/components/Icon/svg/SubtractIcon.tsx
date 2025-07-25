import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string, size: number) => (
  <>
    <g clipPath="url(#clip0_6138_188)">
      <path
        d="M15.9432 11.7609C15.9809 11.852 16.0002 11.9496 16.0002 12.0481C16.0003 12.2468 15.9214 12.4375 15.781 12.5782C15.6406 12.7188 15.4501 12.798 15.2514 12.7983H8.75024C8.65172 12.7983 8.55416 12.7789 8.46314 12.7412C8.37211 12.7035 8.28941 12.6483 8.21974 12.5786C8.15007 12.5089 8.09481 12.4262 8.05711 12.3352C8.0194 12.2442 8 12.1466 8 12.0481C8 11.9496 8.0194 11.852 8.05711 11.761C8.09481 11.67 8.15007 11.5873 8.21974 11.5176C8.28941 11.4479 8.37211 11.3927 8.46314 11.355C8.55416 11.3173 8.65172 11.2979 8.75024 11.2979H15.25C15.3485 11.2978 15.4461 11.3172 15.5371 11.3549C15.6281 11.3926 15.7109 11.4478 15.7805 11.5175C15.8502 11.5872 15.9055 11.6699 15.9432 11.7609Z"
        fill={color}
      />
    </g>
    <rect
      width={size - 1}
      height={size - 1}
      x="0.5"
      y="0.5"
      rx={size / 2}
      stroke={color}
    />
    <defs>
      <clipPath id="clip0_6138_188">
        <rect width={size} height={size} rx="12" />
      </clipPath>
    </defs>
  </>
);

const SubtractIcon: FC<T.ExtendedIcon> = ({ color = "#580F78", size = 24 }) =>
  IconBase({
    path: path(color, size),
    size,
    viewBox: "0 0 24 24",
  });

export default SubtractIcon;
