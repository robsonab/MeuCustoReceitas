import { product } from './product';

export class ingredient {
    constructor() {
        this.qty = 0;        
        this.product = new product();
    }
    qty: number;    
    product: product
    productCode: string;
}