import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodServiceService } from '../../services/foodService/food-service.service';
import { Product } from '../../models/product.model';
import { AlertController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.page.html',
  styleUrls: ['./admin-producto.page.scss'],
})
export class AdminProductoPage implements OnInit, OnDestroy {

  product:any[] = [];
  subscription!:Subscription
  constructor(
    private foodService:FoodServiceService,
    private toastController:ToastController,
    private alertController:AlertController
    ) { }

  ngOnInit() {
    this.getProducts()
    this.subscription = this.foodService.refresh.subscribe(data => {
      this.getProducts()
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
      // cerrando el observable
  }

  getProducts(){
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

  async presentAlert(id:number){
    const alert = await this.alertController.create({
      header: "Esta seguro de eliminar este producto",
      mode: 'ios',
      buttons: [
        {text: 'continuar', handler: () => this.deleteProduct(id)},
        {text:'cancelar', handler: ()=>{console.log('accion cancelada')}}
      ]
    })
    await alert.present()
  }

}
