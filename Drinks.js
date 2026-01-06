export class Drinks {

    #temperature; 

    constructor(name, volume, price) {
        this.name = name; 
        this.volume =volume; 
        this.price = price; 
        this.temperature = temperature; 
    }

    getInfo() {
        console.log(this.name, this.volume, this.price, this.temperature); 
    }

    getTemperature() {
        return this.#temperature; 
    }

    setTemperature() {
        const drinkTemp = this.temperature; 
        return drinkTemp; 
    }

    #preparePrivateDrink() {
        console.log(this.name); 
    }

    giveDrink() {
        console.log(this.name); 
    }
}