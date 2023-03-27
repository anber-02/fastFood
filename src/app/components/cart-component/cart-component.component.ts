import { Component, OnInit, Input } from '@angular/core';
import { CaritoServiceService } from 'src/app/services/caritoServices/carito-service.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
})
export class CartComponentComponent implements OnInit {

  @Input() card:any;
  constructor(
    private carritoService:CaritoServiceService
  ) {}

  eliminarCarrito(card:any){
    this.carritoService.eliminarProdCarrito(card)
      
  }
  
  agregarCarrito(card:any){
    this.carritoService.agregarCarrito(card)
  }

  
  

  ngOnInit(): void {   
  }

}
