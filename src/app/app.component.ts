import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingReceipe';
  selectedMenu = 'RecipeMenu';
  onselectedMenu(selectedMen: string) {
    this.selectedMenu = selectedMen;
  }
}
