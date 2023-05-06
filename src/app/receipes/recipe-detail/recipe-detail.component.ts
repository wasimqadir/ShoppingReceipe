import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  SelectedRecipe: Recipe;
  id: number;
  constructor(private shopplingLstSrvc: ShoppingListService,
    private recipeSrvc: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.SelectedRecipe = this.recipeSrvc.getRecipeById(this.id);
        });
  }

  onAddToShoppingList(eventData: Recipe) {
    this.shopplingLstSrvc.addNewIngredients(this.SelectedRecipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }
}
