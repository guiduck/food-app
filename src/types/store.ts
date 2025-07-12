export interface Store {
  id: number;
  name: string;
  slug: string;
  image: string;
  deliveryPrice: number;
  closingTime: string;
  rating: number;
  isOpen?: boolean;
}

export interface Banner {
  id: number;
  title: string;
  image: string;
  link?: string;
}

export interface StoresResponse {
  stores: Store[];
}

export interface BannersResponse {
  banners: Banner[];
}
