import { ingredient } from './ingredient';

export class recipe{
    code: string;
    name: string;
    ingredients: ingredient[]
    
    constructor() {
        this.ingredients = []
    }
    
}