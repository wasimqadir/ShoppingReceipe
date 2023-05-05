import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService {

    ingredients: Ingredient[] = [];
    newIngredient = new EventEmitter<Ingredient>();

    constructor() {
        this.ingredients.push(new Ingredient("Apples", 1));
        this.ingredients.push(new Ingredient("Tomatoes", 2));
        this.ingredients.push(new Ingredient("Bananas", 3));
    }

    getAllIngredients() {
        return this.ingredients.slice();
    }

    addNewIngredient(newItem: Ingredient) {
        this.ingredients.push(newItem);
        this.newIngredient.emit(newItem);
    }

    deleteIngredient(newItem: Ingredient) {
        let index = this.ingredients.indexOf(newItem);
        this.ingredients.splice(index,1);
        this.newIngredient.emit(newItem);
    }
}