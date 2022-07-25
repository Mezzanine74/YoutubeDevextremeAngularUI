import { ICategory } from "./ICategory";
import { IOrderDetail } from "./IOrderDetail";
import { ISupplier } from "./ISupplier";

export interface IProduct {
    id: number;
    productName: string;
    supplierId: number | null;
    categoryId: number | null;
    quantityPerUnit: string;
    unitPrice: number | null;
    unitsInStock: number | null;
    unitsOnOrder: number | null;
    reorderLevel: number | null;
    discontinued: boolean;
    category: ICategory;
    orderDetails: IOrderDetail[];
    supplier: ISupplier;
}