import { Component, OnInit, Input } from '@angular/core';
import { FavoriteServicesService } from '../../services/favoriteServices/favorite-services.service';
import { ToastController } from '@ionic/angular';
import { CaritoServiceService } from '../../services/caritoServices/carito-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() card: any;

  constructor(
    private favoriteServices: FavoriteServicesService,
    private toastController: ToastController,
    private carritoService: CaritoServiceService
  ) { }


  handleDelete(id: number) {
    console.log(id)
  }


  agregarACarrito(card: any, position: 'bottom' | 'top') {
    let valor = this.carritoService.agregarCarrito(card);
    this.presentToast('Agregado a carrito correctamente', position, 'cart')
  }

  async Action(card: any, position: 'bottom' | 'top') {
    let valor = this.favoriteServices.agregarFavorito(card)
    if (valor) {
      this.presentToast('Eliminado de favoritos', position, 'heart')
    } else {
      this.presentToast('Agregado a favoritos correctamente', position, 'heart')
    }
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

  getIcon(card: any) {
    if (this.favoriteServices.verificarFavoritos(card)) {
      return 'heart'
    }
    return 'heart-outline'
  }
  ngOnInit(): void {

  }

}
