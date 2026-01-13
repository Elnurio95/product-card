export class Cafe {

    constructor (cafeName,location) {
        this.cafeName = cafeName;
        this.location = location;
    }

    getCafeInfo() {
        console.log(`Моё заведение называется ${this.cafeName} и находится в городе ${this.location}`); 
    }

    makeOrder(drink) {
        drink.giveDrink();
    }

}
