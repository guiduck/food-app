import { notFound } from "next/navigation";
import { getStoreDetails } from "@/services/stores/store-details";
import StoreHeader from "./ui/store-header";
import MenuList from "./ui/menu-list";
import ClosedStoreOverlay from "./ui/closed-store-overlay";

// Force dynamic rendering - API calls happen at request time, not build time
export const dynamic = "force-dynamic";

interface StorePageProps {
  params: Promise<{
    storeSlug: string;
  }>;
}

export default async function StorePage({ params }: StorePageProps) {
  const { storeSlug } = await params;

  const storeResult = await getStoreDetails(storeSlug);

  if (storeResult.error || !storeResult.data) {
    notFound();
  }

  const store = storeResult.data.store;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <StoreHeader store={store} />
      <MenuList menu={store.menu} storeSlug={storeSlug} />
      <ClosedStoreOverlay store={store} />
    </div>
  );
}

export async function generateMetadata({ params }: StorePageProps) {
  const { storeSlug } = await params;
  const storeResult = await getStoreDetails(storeSlug);

  if (storeResult.error || !storeResult.data) {
    return {
      title: "Loja não encontrada",
    };
  }

  const store = storeResult.data.store;

  return {
    title: `${store.name} - Delivery`,
    description: `Peça delivery do ${store.name}. Entrega em ${
      store.deliveryTime
    }. Taxa de entrega: ${
      store.deliveryFee === 0 ? "grátis" : `R$ ${store.deliveryFee.toFixed(2)}`
    }`,
  };
}
