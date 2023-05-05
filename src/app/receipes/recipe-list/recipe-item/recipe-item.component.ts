import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() RecipeItem: Recipe;
  @Output() selectedRecipeEmitter = new EventEmitter<Recipe>();

  onSelectedRecipe() {
    this.selectedRecipeEmitter.emit(this.RecipeItem);
  }
}
