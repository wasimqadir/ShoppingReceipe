import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() newShoppingItemEmitter = new EventEmitter<Ingredient>();

  AddToShoppingList(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.newShoppingItemEmitter.emit(new Ingredient(nameInput.value, Number(amountInput.value)));
  }
}
