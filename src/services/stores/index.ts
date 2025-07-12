import API from "@/lib/api";
import { StoresResponse, Store } from "@/types/store";

export async function getStores() {
  const result = await API<StoresResponse>({
    url: "stores",
    method: "GET",
    next: { revalidate: 15 * 60 }, // 15m
  });

  return result;
}

export function isStoreOpen(store: Store): boolean {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const [closingHours, closingMinutes] = store.closingTime
    .split(":")
    .map(Number);
  const closingTimeInMinutes = closingHours * 60 + closingMinutes;

  return currentTime < closingTimeInMinutes;
}

export function addOpenStatusToStores(stores: Store[]): Store[] {
  return stores.map((store) => ({
    ...store,
    isOpen: isStoreOpen(store),
  }));
}
