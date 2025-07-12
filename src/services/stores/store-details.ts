import API from "@/lib/api";
import { StoreDetailsResponse } from "@/types/store-details";

export async function getStoreDetails(slug: string) {
  const result = await API<StoreDetailsResponse>({
    url: `stores/${slug}`,
    method: "GET",
    next: { revalidate: 10 * 60 }, // 10m
  });

  return result;
}
