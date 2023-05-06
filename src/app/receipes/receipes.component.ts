import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
	selector: 'app-receipes',
	templateUrl: './receipes.component.html',
	styleUrls: ['./receipes.component.css']
	//providers: [RecipeService]
})
export class ReceipesComponent {
	selectedRecipe: Recipe;

	constructor(private recipeService: RecipeService) {
		
	}

	ngOnInit(): void {
		this.recipeService.SelectedRecipeChanged.subscribe((recipe: Recipe) => {
			this.selectedRecipe = recipe;
		});
	  }
}
