export class Limonad extends Drinks {
    constructor (name, volume, price, typeOfFruits) {
        super(name, volume, price); 
        this.typeOfFruits = typeOfFruits; 
    }
}