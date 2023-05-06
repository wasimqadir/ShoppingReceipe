import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { RecipeDetailComponent } from './receipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './receipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './receipes/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { dropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from 'src/app-routing.module';
import { RecipeStartComponent } from './receipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './receipes/recipe-edit/recipe-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReceipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    dropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
