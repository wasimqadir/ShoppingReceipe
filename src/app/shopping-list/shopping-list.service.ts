import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

    ingredients: Ingredient[] = [];
    newIngredient = new EventEmitter<Ingredient>();
    allIngredients = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    constructor() {
        // this.ingredients.push(new Ingredient("Apples", 1));
        // this.ingredients.push(new Ingredient("Tomatoes", 2));
        // this.ingredients.push(new Ingredient("Bananas", 3));
    }

    getAllIngredients() {
        return this.ingredients.slice();
    }

    getIngredientByIndex(index: number) {
        return this.ingredients[index];
    }

    addNewIngredients(newItem: Ingredient[]) {
        this.ingredients.push(...newItem);
        this.newIngredient.emit(...newItem.slice());
    }

    addNewIngredient(newItem: Ingredient) {
        this.ingredients.push(newItem);
        this.newIngredient.emit(newItem);
    }

    editIngredient(index: number, editedItem: Ingredient) {
        this.ingredients[index] = editedItem;
        this.newIngredient.emit(editedItem);
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.allIngredients.next(this.ingredients);
    }
}