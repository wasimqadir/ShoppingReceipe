import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  
  ingredients: Ingredient[] = [
    new Ingredient("Apples",1),
    new Ingredient("Tomatoes",2),
    new Ingredient("Bananas",3),
  ];

  onNewShoppingItemAdded(eventData: Ingredient){
    this.ingredients.push(eventData);
  }
}
