import { IOrder } from "./IOrder";
import { IProduct } from "./IProduct";

export interface IOrderDetail {
    id: number;
    orderId: number;
    productID: number;
    unitPrice: number;
    quantity: number;
    discount: number;
    order: IOrder;
    product: IProduct;
}