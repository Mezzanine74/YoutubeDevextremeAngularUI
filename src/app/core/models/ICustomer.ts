import { ICustomerDemographic } from "./ICustomerDemographic";
import { IOrder } from "./IOrder";

export interface ICustomer {
    id: number;
    customerCode: string;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    phone: string;
    fax: string;
    orders: IOrder[];
    customerDemographics: ICustomerDemographic[];
}