import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  customObservableSubscription: Subscription;
  ngOnInit(): void {
    const customIntervalObserver = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count > 3)
        observer.error(new Error('error occured.'));
        count++;
      }, 1000);
    });

    this.customObservableSubscription = customIntervalObserver.subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.customObservableSubscription.unsubscribe();
  }
}
