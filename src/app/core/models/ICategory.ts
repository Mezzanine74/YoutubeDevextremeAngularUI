import { IProduct } from "./IProduct";

export interface ICategory {
    id: number;
    categoryName: string;
    description: string;
    picture: string;
    products: IProduct[];
}