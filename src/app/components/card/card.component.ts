import { Component, OnInit, Input } from '@angular/core';
import { FavoriteServicesService } from '../../services/favoriteServices/favorite-services.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() card:any;

  constructor(
    private favoriteServices: FavoriteServicesService,
    private toastController: ToastController
  ) {}

  async Action(card: any, position: 'bottom' | 'top') {
    let valor = this.favoriteServices.agregarFavorito(card)
    if (valor) {
      this.presentToast('Eliminado de favoritos', position)
    } else {
      this.presentToast('Agregado a favoritos correctamente', position)
    }
  }

  async presentToast(message: string, position: 'bottom' | 'top') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position,
      icon: 'heart'
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
