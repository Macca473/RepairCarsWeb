import { CarPart } from "./CarPart";

export interface Car {
    car_id: number;
    car_name: string;
    CarParts: Array<CarPart>;
}