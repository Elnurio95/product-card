export class Coffee extends Drinks {
    constructor (name, volume, price, beans) {
        super(name, volume, price, temperature); 
        this.beans = beans; 
    }
}

