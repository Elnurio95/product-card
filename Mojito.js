import { Drink } from "./Drink.js";

export class Mojito extends Drink {
    constructor (name, volume, price, compound) {
        super(name, volume, price);
        this.compound = compound;  
    }

    isAlcoholic() {
        if (this.compound === 'безалкогольный') {
            return true; 
        }
    }
}