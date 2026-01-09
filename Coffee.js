import { Drink } from "./Drink.js";

export class Coffee extends Drink {
    constructor (name, volume, price, beans) {
        super(name, volume, price); 
        this.beans = beans; 
    }

    getBeansType() {
        console.log(`Эспрессо обычно из зёрен ${this.beans} темной обжарки`); 
    }
}

