import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodServiceService } from '../../services/foodService/food-service.service';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AlertServiceService } from '../../services/alert-service.service';


@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.page.html',
  styleUrls: ['./admin-producto.page.scss'],
})
export class AdminProductoPage implements OnInit, OnDestroy {

  product: any[] = [];
  subscription!: Subscription

  constructor(
    private foodService: FoodServiceService,
    private toastController: ToastController,
    private alertService: AlertServiceService
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

  getProducts() {
    this.foodService.getCards().subscribe((data: any) => {
      this.product = data
    })
  }

  deleteProduct(id: number) {
    this.alertService.confirmar('ELiminar', 'Esta seguro de eliminar')
      .then((res: any) => {
        if (res.data) {
          this.foodService.deleteProduct(id).subscribe((data: any) => {
            this.presentToast(data[0], 'bottom', 'trash')
          })
        }
      })
  }

  async presentToast(message: string, position: 'bottom' | 'top', icon: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      icon: icon
    })
    await toast.present()
  }
}
