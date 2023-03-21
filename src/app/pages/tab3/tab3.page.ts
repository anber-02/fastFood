import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodServiceService } from '../../services/foodService/food-service.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {

  cards: Product[] = [];
  subscription !:Subscription;
  constructor(
    private foodServices: FoodServiceService,
  ) {}

  ngOnInit(): void {
    this.getProducts()

    this.subscription = this.foodServices.refresh.subscribe(()=>{
      this.getProducts()
    })
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
      console.log('observable cerrado')
  }

  getProducts(){
    this.foodServices.getCards().subscribe(
      (data: any) => {
        console.log(data)
        this.cards = data
      }
    );
  }

}
