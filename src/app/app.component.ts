import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './receipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService, RecipeService]
})
export class AppComponent {
  title = 'ShoppingReceipe';
  selectedMenu = 'RecipeMenu';
  onselectedMenu(selectedMen: string) {
    this.selectedMenu = selectedMen;
  }
}
