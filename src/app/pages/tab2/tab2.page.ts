import { Component } from '@angular/core';
import { CaritoServiceService } from '../../services/caritoServices/carito-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  total:any
  subscription!:Subscription
  constructor(
    private carritoService:CaritoServiceService
    ) {
      this.carritoService.refresh.subscribe(data => {
        console.log('se agrego o elimino algo')
        this.getTotal()
      })
      this.getTotal()
    }

    get carrito(){
      return this.carritoService.localCards
    }

    getTotal(){
      this.total = this.carritoService.getTotal()
    }

}
