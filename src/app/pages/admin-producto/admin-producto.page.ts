import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../services/foodService/food-service.service';
import { Product } from '../../models/product.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.page.html',
  styleUrls: ['./admin-producto.page.scss'],
})
export class AdminProductoPage implements OnInit {

  product:any[] = [];
  constructor(
    private foodService:FoodServiceService,
    private toastController:ToastController
    ) { }

  ngOnInit() {
    this.foodService.getCards().subscribe((data:any) => {
      this.product = data
    })
  }

  deleteProduct(id:number){
    this.foodService.deleteProduct(id).subscribe((data:any)=>{
      this.presentToast(data[0], 'bottom', 'trash')
    })
  }

  async presentToast(message: string, position: 'bottom' | 'top', icon:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      icon: icon
    })
    await toast.present()
  }

}
