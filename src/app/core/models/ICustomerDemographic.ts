import { ICustomer } from "./ICustomer";

export interface ICustomerDemographic {
    id: number;
    customerDesc: string;
    code: string;
    customers: ICustomer[];
}