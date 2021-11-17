import { Car } from "./Car";
import { Part } from "./Part";
import { CarPart } from "./CarPart";


export interface RootModel
{
    Cars: Array<Car>;
    Parts: Array<Part>;
    CarParts: Array<CarPart>;
}