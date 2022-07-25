import { IEmployee } from "./IEmployee";

export interface IEmployeeFile {
    id: number;
    employeeId: number;
    fileUrl: string;
    employee: IEmployee;
}