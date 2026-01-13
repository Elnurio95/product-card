export class Drink {

    #temperature; 

    constructor(name, volume, price, temperature) {
        this.name = name; 
        this.volume =volume; 
        this.price = price; 
        this.#temperature = temperature; 
    }

    getInfo() {
        console.log(`Напиток: ${this.name}, объем напитка ${this.volume}, цена напитка ${this.price}`); 
    }

    getTemperature() {
        return this.#temperature; 
    }

    setTemperature(temp) {
        this.#temperature = temp;  
    }

    #preparePrivateDrink() {
        return this.name;  
    }

    giveDrink() {
        this.getInfo(); 
    }
}
