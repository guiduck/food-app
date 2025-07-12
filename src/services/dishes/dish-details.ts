import API from "@/lib/api";
import { Dish } from "@/types/store-details";

export async function getDishDetails(
  storeSlug: string,
  dishId: string
): Promise<{
  data?: Dish;
  error?: string;
}> {
  const response = await API<{ dish: Dish }>({
    url: `stores/${storeSlug}/dishes/${dishId}`,
    method: "GET",
    next: { revalidate: 0 },
  });

  if (response.error) {
    return { error: response.errorUserMessage };
  }

  return { data: response.data!.dish };
}
