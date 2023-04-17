import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBookPageRoutingModule } from './new-book-routing.module';

import { NewBookPage } from './new-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewBookPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewBookPage]
})
export class NewBookPageModule {}
