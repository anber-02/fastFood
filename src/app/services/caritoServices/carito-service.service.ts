import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaritoServiceService {
  miCarrito: any[] = [];
  existe: any;
  totalGeneral:any;
  delete = true;
  constructor() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    return this.miCarrito = JSON.parse(localStorage.getItem('carrito') || '[]') || [];
  }

  agregarCarrito(card: any) {
    if (this.miCarrito) {
      this.existe = this.miCarrito.find(c => c.id === card.id)
    }
    if (this.existe) {
      this.existe.cantidad += 1
      this.existe.total = this.existe.cantidad * this.existe.precio
      // this.delete = true;
      this.miCarrito = this.miCarrito.filter(c => c.id !== card.id)
      this.miCarrito = [this.existe, ...this.miCarrito]
      console.log(this.existe);
    }
    else {
      const newProd = {
        ...card,
        cantidad:1,
        total: card.precio
      }
      this.miCarrito = [newProd, ...this.miCarrito]
      // this.delete = false;
      // this.miCarrito.unshift(card); //el unshift coloca el elemento al principio del array
    }
    localStorage.setItem('carrito', JSON.stringify(this.miCarrito));
    return this.delete
  }

  verificarCarrito(card: any) {
    return !!this.miCarrito.find(c => c.id === card.id)
  }

  eliminarProdCarrito(card:any){
    if(this.existe){
      this.existe.cantidad -= 1;
      this.existe.total = this.existe.cantidad * this.existe.precio

      this.miCarrito = this.miCarrito.filter(c => c.id !== card.id)
      this.miCarrito = [this.existe, ...this.miCarrito]
      localStorage.setItem('carrito', JSON.stringify(this.miCarrito));
    }
  }

  get localCards() {
    return [...this.miCarrito];
  }

  getTotal(){
    this.totalGeneral = 0;
    this.miCarrito.forEach(prod => {
      this.totalGeneral += prod.total
    })

    return this.totalGeneral
  }
}
