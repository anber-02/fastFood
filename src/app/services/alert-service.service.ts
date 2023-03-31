import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(private alertController: AlertController) { }

  async confirmar(title: string, msg: string) {
    let choice
    const alert = await this.alertController.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: 'Accept', handler: () => {
            alert.dismiss(true)
            return false
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            alert.dismiss(false)
            return false
          }
        }
      ]
    })
    await alert.present()
    await alert.onDidDismiss()
      .then(data => {
        // data hace referencia a alos datos que mandamos al hacer un dismis en los handler
        // de los botones
        choice = data //true, false
      })
      return choice
  }


  
}
