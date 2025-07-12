import { MenuSection } from "@/types/store-details";
import SimpleAccordion from "@/components/SimpleAccordion";
import Ingredient from "@/components/Ingredient";
import { DolarSignIcon } from "../Icon";
import Link from "next/link";

interface MenuItemProps {
  section: MenuSection;
  storeSlug: string;
}

export default function MenuItem({ section, storeSlug }: MenuItemProps) {
  let title: React.ReactNode = section.title;

  if (section.hasOffer) {
    title = (
      <span className="flex items-center gap-xs">
        <span>{section.title}</span>
        <span className="text-success">
          <DolarSignIcon size={18} />
        </span>
      </span>
    );
  }

  return (
    <SimpleAccordion title={title} description={section.description}>
      <div>
        {section.dishes.map((dish, index) => (
          <Link
            key={`${dish.id}-${index + 1}-dish`}
            href={`/lojas/${storeSlug}/pratos/${dish.id}`}
          >
            <Ingredient
              name={dish.name}
              description={dish.description}
              warning={dish.warning}
              price={dish.price}
              originalPrice={dish.originalPrice}
            />
          </Link>
        ))}
      </div>
    </SimpleAccordion>
  );
}
