import { TprojectColors } from "../commons/categoriesColorsSelect";

export enum Epriority {
    p1,
    p2,
    p3,
    p4
}

export interface Iproject {
    id: string,
    title: string,
    color: TprojectColors,
}