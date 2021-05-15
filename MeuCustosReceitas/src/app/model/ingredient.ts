import { product } from './product';

export class ingredient {
    constructor() {
        this.qty = 0;        
    }
    qty: number;    
    product: product
    productCode: string;
}