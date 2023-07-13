import { BaseEntity } from "src/base-entity";
export declare class EstimateSetting extends BaseEntity {
    name: string;
    size: string;
    unit: string;
    price100: number;
    price500: number;
    price1000: number;
}
