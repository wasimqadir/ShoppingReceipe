import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { RecipeDetailComponent } from './receipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './receipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './receipes/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
