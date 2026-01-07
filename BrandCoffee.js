import { Coffee } from "./Coffee.js";

export class BrandCoffee extends Coffee {

    constructor(country, roasting, brand) {
        super(country, roasting);
        this.brand = brand; 
    }

    determineBrand()  {
        console.log(`${this.country} ${this.roasting} - ${this.brand} брендированный сорт кофе`);  
    }
    
}
