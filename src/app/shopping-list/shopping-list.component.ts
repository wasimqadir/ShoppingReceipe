import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  ingredientsSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getAllIngredients();
  }

  ngOnInit(): void {
    this.shoppingListService.newIngredient.subscribe((ingredient: Ingredient) => {
      this.ingredients = this.shoppingListService.getAllIngredients();
    });

    this.ingredientsSubscription = this.shoppingListService.allIngredients.subscribe((items: Ingredient[]) => {
      this.ingredients = this.shoppingListService.getAllIngredients();
    });
  }

  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }

  OnEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
