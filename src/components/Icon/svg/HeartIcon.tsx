import { FC } from "react";
import { IconBase } from "./base";
import * as T from "../types";

const path = (color: string, secondaryColor = "none") => {
  // If color is "none" or "transparent", show outline only
  const isOutline = color === "none" || color === "transparent";

  return (
    <>
      <g clipPath="url(#clip0_2455_3290)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18.4C12.2773 18.3999 12.6715 18.1611 12.9995 17.9579C13.8996 17.4002 14.7591 16.7781 15.5711 16.096C18.2955 13.6976 19.5 11.2994 19.5 9.19751C19.5 7.18842 17.79 5.50001 16.05 5.50001H16.0471C15.4878 5.49893 14.9356 5.62526 14.4324 5.86938C13.9496 6.10769 13 7 13 7L11.9998 8L11 7C11 7 10.0505 6.10762 9.56777 5.86938C9.06457 5.62523 8.51232 5.4989 7.95297 5.50001L7.95 5.50001C6.20955 5.50001 4.5 7.18728 4.5 9.19751C4.5 11.2996 5.70455 13.6978 8.4289 16.0963C9.24072 16.7783 10.1 17.4003 11 17.9579C11.3279 18.1611 11.7227 18.4001 12 18.4ZM7.45078 17.2336C4.53906 14.6745 3 11.8957 3 9.19751C3 6.42866 5.313 4.00001 7.95 4.00001C8.73884 3.99845 9.51765 4.17698 10.227 4.52201C10.4749 4.64399 10.7108 4.7868 10.9324 4.94846C11.3419 5.24715 11.7027 5.61017 12 6.02501C12.2974 5.61022 12.6582 5.24722 13.0677 4.94854C13.2894 4.78686 13.5253 4.64402 13.7732 4.52201C14.4825 4.17703 15.2612 3.9985 16.05 4.00001C18.6868 4.00001 21 6.43001 21 9.19751C21 11.8955 19.4609 14.6742 16.5492 17.2334C15.4435 18.1635 14.2553 18.9896 12.9995 19.7014C12.9995 19.7014 12.4074 19.9999 12 20C11.5924 20.0001 11 19.7014 11 19.7014C9.74438 18.9897 8.55627 18.1637 7.45078 17.2336Z"
          fill={isOutline ? "none" : color}
          stroke={isOutline ? secondaryColor : "none"}
          strokeWidth={isOutline ? "2" : "0"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2455_3290">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </>
  );
};

const HeartIcon: FC<T.ExtendedIcon> = ({
  color = "currentColor",
  secondaryColor,
  size,
}) =>
  IconBase({
    path: path(color, secondaryColor),
    size,
    viewBox: "0 0 24 24",
  });

export default HeartIcon;
