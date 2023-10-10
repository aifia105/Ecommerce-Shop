import { Category } from "./category";

export interface Product {
    id? : string;
    name : string;
    priceHt : number;
    tva : number;
    priceTTC : number;
    pricture : string;
    category : Category;
    avg_rating : number;
    CreationDate : string;
}