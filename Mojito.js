export class Mojito extends Drinks {
    constructor (name, volume, price, compound) {
        super(name, volume, price);
        this.compound = compound;  
    }
}