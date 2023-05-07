import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editedItemIndex: number;
  editingMode: boolean = false;
  editIndexSubscription: Subscription;
  @ViewChild('f') slForm: NgForm;
  editedIngredit: Ingredient;
  // @Output() newShoppingItemEmitter = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.editIndexSubscription = this.shoppingListService.startedEditing.subscribe((index: number)=>{
      this.editedItemIndex = index;
      this.editingMode=true;
      this.editedIngredit = this.shoppingListService.getIngredientByIndex(index);
      this.slForm.setValue({
        'name': this.editedIngredit.name,
        'amount' : this.editedIngredit.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.editIndexSubscription.unsubscribe();
  }

//nameInput: HTMLInputElement, amountInput: HTMLInputElement
  addToShoppingList(form: NgForm) {
    var data= form.value;
    if(!this.editingMode){
      this.shoppingListService.addNewIngredient(new Ingredient(data.name, Number(data.amount)));
    }
    else{
      this.shoppingListService.editIngredient(this.editedItemIndex, new Ingredient(data.name, Number(data.amount)));
    }
    this.slForm.reset();
    this.editingMode = false;
  }

  onClearForm(){
    this.slForm.reset();
    this.editingMode = false;
  }

  deleteFromShoppingList() {
    console.log(this.editedItemIndex);
    debugger;
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearForm();
  }
}
