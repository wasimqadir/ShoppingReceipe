import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	//@Output() selectedRecipeEmitter = new EventEmitter<Recipe>();

	recipes: Recipe[] = [];

	// onSelectedRecipeChanged(selectedRecipe: Recipe) {
	// 	this.selectedRecipeEmitter.emit(selectedRecipe);
	// }

	constructor(private recipeService: RecipeService) {
	}

	ngOnInit(): void {
		this.recipes = this.recipeService.getRecipes();
	}
}
