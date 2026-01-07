export class Coffee {

    constructor(country, roasting) {
        this.country = country; 
        this.roasting = roasting; 
    }

    determine() {
        console.log(`${this.country} - кофе ${this.roasting} обжарки`);
    }
    
}

