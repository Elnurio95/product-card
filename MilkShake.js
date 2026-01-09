import { Drink } from "./Drink.js";

export class MilkShake extends Drink {
    constructor (name, volume, price, sortOfMilk, temperature) {
        super(name, volume, price); 
        this.sortOfMilk = sortOfMilk; 
        this.temperature = temperature; 
    }

    setMilkTemp(temp) {
        this.temperature = temp;  
        console.log(`Нельзя нагревать молоко для приготовления кофейных напитков более ${temp} градусов`); 
    }
}