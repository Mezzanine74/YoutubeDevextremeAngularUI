import { IOrder } from "./IOrder";

export interface IShipper {
    id: number;
    companyName: string;
    phone: string;
    orders: IOrder[];
}