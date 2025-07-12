import { ArrowRightIcon, LocationIcon } from "../Icon";

interface AddressLineProps {
  href: string;
  addressLine2: string;
  address: string;
}

export default function AddressLine({
  href,
  addressLine2,
  address,
}: AddressLineProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-xs text-left hover:opacity-80 transition-opacity"
    >
      <LocationIcon size={24} color="white" />
      <div className="flex flex-col">
        <span className="text-xs text-primary-foreground/80">
          {addressLine2}
        </span>
        <div className="flex items-center gap-xxs">
          <span className="text-s font-medium text-primary-foreground max-w-[180px] truncate">
            {address}
          </span>
          <ArrowRightIcon size={17} color="white" />
        </div>
      </div>
    </a>
  );
}
