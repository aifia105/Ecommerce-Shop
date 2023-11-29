import { BackendErrors } from "src/app/models/backendErrors";
import { OrderClient } from "src/app/models/order";

export interface chekoutStateInterface {
    order: OrderClient;
    status: string;
    validatonError: BackendErrors | null;
}