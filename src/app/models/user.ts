import { Adress } from "./adresse";

export interface User {
    id? : string;
    name : string;
    lastName : string;
    birthday : Date;
    adress : Adress ;
    picture? : string;
    email : string;
    password : string;
    phone : string;

}