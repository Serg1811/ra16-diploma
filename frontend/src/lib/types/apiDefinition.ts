export interface CatalogItemApiInterface {
  id: number;
  category: number;
  title: string;
  price: number;
  images: string[];
}

export interface CatalogCategoryApiInterface {
  id: number;
  title: string;
}

export interface CartItemInterface {
  id: number;
  quantity: number;
  size: string;
  price: number;
  title: string;
}

export interface CartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "RESET";
  payload: CartItemInterface;
}

export interface CatalogItemInterface {
  id: number;
  category: number;
  title: string;
  images: string[];
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  sizes: Size[];
}

export interface Size {
  size: string;
  available: boolean;
}
