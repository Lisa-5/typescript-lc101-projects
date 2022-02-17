import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import {Payload} from './Payload';

export class Rocket implements Payload {
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] =[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        this.massKg = 0;
    
        for(let i = 0; i < items.length; i++){
            this.massKg += items[i].massKg;
        }
        return this.massKg;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === false) {
            return false;
        }else if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === false) {
            return false;
        }else if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
    }
}