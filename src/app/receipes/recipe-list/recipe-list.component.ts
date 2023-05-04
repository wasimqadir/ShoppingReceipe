import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
	recipes: Recipe[] = [
		new Recipe("Test Recipe","This is a simple Recipe","https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505")
	];
	
	constructor(){
		this.recipes.push(new Recipe("Chicken Fajita","Pizza","https://www.pakistanichefrecipes.com/wp-content/uploads/2018/04/Chicken-Fajita-Pizza-500x500.jpg"));
		this.recipes.push(new Recipe("Beef Pizza","Pizza","https://www.pakistanichefrecipes.com/wp-content/uploads/2018/04/Chicken-Fajita-Pizza-500x500.jpg"));
		this.recipes.push(new Recipe("Mutton Corn Soup","Soup","https://www.pakistanichefrecipes.com/wp-content/uploads/2018/04/Chicken-Fajita-Pizza-500x500.jpg"));
	}
}
