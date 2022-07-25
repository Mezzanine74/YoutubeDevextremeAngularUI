import { IEmployeeFile } from "./IEmployeeFile";
import { IOrder } from "./IOrder";
import { ITerritory } from "./ITerritory";

export interface IEmployee {
    id: number;
    lastName: string;
    firstName: string;
    title: string;
    titleOfCourtesy: string;
    birthDate: string | null;
    hireDate: string | null;
    address: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    homePhone: string;
    extension: string;
    photo: string;
    notes: string;
    reportsTo: number | null;
    photoPath: string;
    employeeFiles: IEmployeeFile[];
    orders: IOrder[];
    territories: ITerritory[];
}