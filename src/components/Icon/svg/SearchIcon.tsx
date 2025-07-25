import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string) => (
  <g>
    <g clipPath="url(#clip0_6138_266)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3913 16.452C12.6424 18.6717 8.60476 18.5043 6.05025 15.9497C3.31658 13.2161 3.31658 8.78392 6.05025 6.05025C8.78392 3.31658 13.2161 3.31658 15.9497 6.05025C18.5043 8.60476 18.6717 12.6424 16.452 15.3913L19.7803 18.7199C19.9271 18.8667 20.0004 19.0592 20 19.2516C19.9996 19.4431 19.9264 19.6345 19.7803 19.7806C19.6292 19.9316 19.4297 20.0048 19.2317 20C19.0459 19.9955 18.8615 19.9223 18.7197 19.7806L15.3913 16.452ZM14.8891 14.8891C12.7412 17.037 9.2588 17.037 7.11091 14.8891C4.96303 12.7412 4.96303 9.2588 7.11091 7.11091C9.2588 4.96303 12.7412 4.96303 14.8891 7.11091C17.037 9.2588 17.037 12.7412 14.8891 14.8891Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6138_266">
        <rect width="24" height="24" fill="none" />
      </clipPath>
    </defs>
  </g>
);

const SearchIcon: FC<T.ExtendedIcon> = ({ color = "currentColor", size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: "0 0 24 24",
  });

export default SearchIcon;
