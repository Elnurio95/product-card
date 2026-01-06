export class Cafe {

    constructor(cafeName,location) {
        this.cafeName = cafeName;
        this.location = location;
    }

    getInfoCafe() {
        console.log(this.cafeName, this.location); 
    }

    makeOrder() {
        console.log(this.Drinks.giveDrink()); 
    }

}

