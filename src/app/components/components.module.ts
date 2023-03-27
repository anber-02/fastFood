import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { CartComponentComponent } from './cart-component/cart-component.component';



@NgModule({
  declarations: [CardComponent, CartComponentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CardComponent, CartComponentComponent]
})
export class ComponentsModule { }
