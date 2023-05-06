import { Component, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	//@Output() selectedRecipeEmitter = new EventEmitter<Recipe>();
	@ViewChild('f') formInput : NgForm;
	recipes: Recipe[] = [];
	dropdownOptions: string[] = ['Basic','Advanced','Pro'];

	// onSelectedRecipeChanged(selectedRecipe: Recipe) {
	// 	this.selectedRecipeEmitter.emit(selectedRecipe);
	// }

	constructor(private recipeService: RecipeService,
		private router: Router, private route: ActivatedRoute) {
	}

	onSubmit(f: NgForm) {
		console.log(this.formInput);
	}

	ngOnInit(): void {
		this.recipes = this.recipeService.getRecipes();
	}

	onAddNewRecipe() {
		this.router.navigate(['new'], { relativeTo: this.route});
	}

	 emailValidator(control: FormControl) : Promise<any> | Observable<any>{
		const promise = new Promise<any>((resolve, reject)=>{
			setTimeout(() => {
				if(control.value === 'test@test.com'){
					resolve({'EmailIsForbidden':true});
				}
				else
				resolve(null);
			}, 1500);
		});
		return promise;
	}
}
