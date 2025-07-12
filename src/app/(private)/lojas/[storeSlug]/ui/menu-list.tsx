import { MenuSection } from "@/types/store-details";
import MenuItem from "@/components/MenuItem";
import Divider from "@/components/ui/divider";

interface MenuListProps {
  menu: MenuSection[];
  storeSlug: string;
}

export default function MenuList({ menu, storeSlug }: MenuListProps) {
  if (menu.length === 0) {
    return (
      <div className="text-center py-xl">
        <p className="text-text-secondary text-m">
          Menu não disponível no momento
        </p>
      </div>
    );
  }

  return (
    <div className="pb-l">
      {menu.map((section, index) => (
        <div key={`${section.id}-${index + 1}`}>
          <MenuItem section={section} storeSlug={storeSlug} />
          {index !== menu.length - 1 && <Divider className="my-[4px]" />}
        </div>
      ))}
    </div>
  );
}
