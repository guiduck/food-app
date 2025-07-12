import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string) => (
  <g fill="none">
    <path
      fill={color}
      d="m4.17,139.01C4.21,64.51,64.63,4.15,139.12,4.18c74.5.04,134.86,60.46,134.82,134.95-.04,74.5-60.46,134.86-134.95,134.82-.08,0-.17,0-.25,0-74.28-.46-134.32-60.67-134.57-134.95m216.63-27.81l-21.26-23.27-75.85,68.89-37.08-37.45-22.29,22.06,58.68,58.7,97.8-88.91"
    />
    <path
      fill="#fff"
      d="m220.85,111.22l-97.8,88.91-58.68-58.72,22.22-22.01,37.13,37.46,75.85-68.89,21.28,23.25"
    />
  </g>
);

const CheckIcon: FC<T.ExtendedIcon> = ({ color = "currentColor", size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: "0 0 278.12 278.12",
  });

export default CheckIcon;
