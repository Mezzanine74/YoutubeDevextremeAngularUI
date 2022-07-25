import { IEmployee } from "./IEmployee";
import { IRegion } from "./IRegion";

export interface ITerritory {
    id: number;
    territoryCode: string;
    territoryDescription: string;
    regionId: number;
    region: IRegion;
    employees: IEmployee[];
}