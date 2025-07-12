import Banner from "@/components/Banner";
import { getBanners } from "@/services/banners";
import { getStores, addOpenStatusToStores } from "@/services/stores";
import StoreList from "./ui/store-list";
import HomeSearchBar from "./ui/search-bar";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [bannersResult, storesResult] = await Promise.all([
    getBanners(),
    getStores(),
  ]);

  if (bannersResult.error || storesResult.error) {
    return (
      <div className="container mx-auto p-l">
        <div className="text-center py-xl">
          <p className="text-text-secondary text-m">
            Erro ao carregar dados. Tente novamente.
          </p>
        </div>
      </div>
    );
  }

  const storesWithStatus = addOpenStatusToStores(
    storesResult.data?.stores || []
  );
  const banners = bannersResult.data?.banners || [];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="bg-primary dark:bg-primary-dark px-m pb-m">
        <HomeSearchBar />
      </div>
      <div className="container">
        {banners.length > 0 && (
          <section className="mb-l">
            <Banner banner={banners[0]} />
          </section>
        )}

        <section className="pb-l px-m">
          <StoreList stores={storesWithStatus} />
        </section>
      </div>
    </div>
  );
}
