import { Car } from "./Car";
import { Part } from "./Part";


export interface RootModel
{
    Cars: Array<Car>;
    Parts: Array<Part>;
}