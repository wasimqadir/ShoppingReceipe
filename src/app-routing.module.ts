import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ReceipesComponent } from "./app/receipes/receipes.component";
import { ShoppingListComponent } from "./app/shopping-list/shopping-list.component";
import { RecipeListComponent } from "./app/receipes/recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./app/receipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./app/receipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./app/receipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    { path:'', redirectTo: '/recipes', pathMatch: 'full' },
    { path:'recipes', component: ReceipesComponent, children:[
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    { path:'shoppinglist', component: ShoppingListComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})

export class AppRoutingModule {

}