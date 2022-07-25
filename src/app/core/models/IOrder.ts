import { ICustomer } from "./ICustomer";
import { IEmployee } from "./IEmployee";
import { IOrderDetail } from "./IOrderDetail";
import { IShipper } from "./IShipper";

export interface IOrder {
    id: number;
    customerId: number;
    customerCode: string;
    employeeId: number | null;
    orderDate: string | null;
    requiredDate: string | null;
    shippedDate: string | null;
    shipperId: number | null;
    freight: number | null;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    shipRegion: string;
    shipPostalCode: string;
    shipCountry: string;
    customer: ICustomer;
    employee: IEmployee;
    orderDetails: IOrderDetail[];
    shipper: IShipper;
}