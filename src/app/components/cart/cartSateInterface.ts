import { BackendErrors } from "src/app/models/backendErrors";
import { CartProduct } from "src/app/models/cartProduct";

export interface CartStateInterface {
 items:  CartProduct[];
 status: string;
 validatonError: BackendErrors | null;
}