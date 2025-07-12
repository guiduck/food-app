import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string) => (
  <path
    id="Button_Icon"
    data-name="Button Icon"
    d="M29.53,19.53a.75.75,0,0,0-1.061-1.061L24,22.939l-4.47-4.47a.75.75,0,0,0-1.061,1.061L22.939,24l-4.47,4.47A.75.75,0,0,0,19.53,29.53L24,25.061l4.47,4.47A.75.75,0,0,0,29.53,28.47L25.06,24Z"
    transform="translate(-18.25 -18.25)"
    fill={color}
  />
);

const CloseIcon: FC<T.ExtendedIcon> = ({ color = "currentColor", size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: "0 0 11.5 11.5",
  });

export default CloseIcon;
