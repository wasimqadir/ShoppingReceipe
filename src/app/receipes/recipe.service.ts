import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [];
    SelectedRecipeChanged = new EventEmitter<Recipe>();

    constructor() {
        this.recipes.push(new Recipe("Test Recipe", "This is a simple Recipe", "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505"));
		this.recipes.push(new Recipe("Chicken Fajita", "Pizza", "https://www.pakistanichefrecipes.com/wp-content/uploads/2018/04/Chicken-Fajita-Pizza-500x500.jpg"));
		this.recipes.push(new Recipe("Mutton Corn Soup", "Soup", "https://www.pakistanichefrecipes.com/wp-content/uploads/2018/04/Chicken-Fajita-Pizza-500x500.jpg"));
        this.recipes.push(new Recipe("Beef Handi", "Handi", "https://www.pakistanichefrecipes.com/wp-content/uploads/2018/04/Chicken-Fajita-Pizza-500x500.jpg"));
    }

    getRecipes() {
        return this.recipes.slice();
    }
}