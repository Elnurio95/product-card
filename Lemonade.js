import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
    constructor (name, volume, price, typeOfFruits, fruitsQuantity) {
        super(name, volume, price); 
        this.typeOfFruits = typeOfFruits; 
        this.fruitsQuantity = fruitsQuantity; 
    }

    getFruitsQuantity() {
        return this.fruitsQuantity; 
    }
}