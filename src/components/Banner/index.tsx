import { Banner as BannerType } from "@/types/store";
import Image from "next/image";

interface BannerProps {
  banner: BannerType;
  className?: string;
}

export default function Banner({ banner, className = "" }: BannerProps) {
  const content = (
    <div className={`relative w-full h-32 ${className}`}>
      <Image
        src={banner.image}
        alt={banner.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );

  if (banner.link) {
    return (
      <a
        href={banner.link}
        className="block hover:opacity-90 transition-opacity"
      >
        {content}
      </a>
    );
  }

  return content;
}
