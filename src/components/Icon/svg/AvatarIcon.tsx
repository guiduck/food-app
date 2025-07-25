import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string) => (
  <g>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2455_3693)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9286 12.053C16.1836 11.1446 17 9.66766 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 9.66766 7.81643 11.1446 9.0714 12.053C6.1018 13.2218 4 16.1154 4 19.5V19.6429C4 20.3924 4.60761 21 5.35714 21H18.6429C19.3924 21 20 20.3924 20 19.6429V19.5C20 16.1154 17.8982 13.2218 14.9286 12.053ZM15.5 8C15.5 9.933 13.933 11.5 12 11.5C10.067 11.5 8.5 9.933 8.5 8C8.5 6.067 10.067 4.5 12 4.5C13.933 4.5 15.5 6.067 15.5 8ZM12 13C8.41015 13 5.5 15.9101 5.5 19.5H18.5C18.5 15.9101 15.5899 13 12 13Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2455_3693">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>
  </g>
);

const AvatarIcon: FC<T.ExtendedIcon> = ({ color = "#580F78", size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: "0 0 24 24",
  });

export default AvatarIcon;
