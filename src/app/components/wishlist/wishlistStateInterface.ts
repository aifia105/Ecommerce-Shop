import { Product } from "src/app/models/product";

export interface WishListStateInterface {
    items: Product[];
    status: string | null;
}