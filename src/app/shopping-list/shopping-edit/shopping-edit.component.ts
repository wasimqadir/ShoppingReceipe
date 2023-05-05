import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  // @Output() newShoppingItemEmitter = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {

  }

  addToShoppingList(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.shoppingListService.addNewIngredient(new Ingredient(nameInput.value, Number(amountInput.value)));
  }

  deleteFromShoppingList(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.shoppingListService.deleteIngredient(new Ingredient(nameInput.value, Number(amountInput.value)));
  }
}
