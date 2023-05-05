import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() RecipeItem: Recipe;
  //@Output() selectedRecipeEmitter = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {
		
	}

  onSelectedRecipe() {
    this.recipeService.SelectedRecipeChanged.emit(this.RecipeItem);
    //this.selectedRecipeEmitter.emit(this.RecipeItem);
  }
}
