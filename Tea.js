export class Tea extends Drinks {
    constructor (name, volume, price, teaField) {
        super(name, volume, price); 
        this.teaField = teaField; 
    }
}