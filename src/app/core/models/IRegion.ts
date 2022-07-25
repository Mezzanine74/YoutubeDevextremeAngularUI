import { ITerritory } from "./ITerritory";

export interface IRegion {
    id: number;
    regionDescription: string;
    territories: ITerritory[];
}