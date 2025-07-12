import API from "@/lib/api";
import { BannersResponse } from "@/types/store";

export async function getBanners() {
  const result = await API<BannersResponse>({
    url: "banners",
    method: "GET",
    next: { revalidate: 30 * 60 }, // 30m
  });

  return result;
}
