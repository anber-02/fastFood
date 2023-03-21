import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServicesService {

  misFavoritos: any[] = [];
  existe: any;
  delete = true;
  constructor() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    return this.misFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]') || [];
  }

  agregarFavorito(card: any) {
    if (this.misFavoritos) {
      this.existe = this.misFavoritos.find(c => c.id === card.id)
    }
    if (this.existe) {
      this.delete = true;
      this.misFavoritos = this.misFavoritos.filter(c => c.id !== card.id)
      console.log(this.existe);
    }
    else {
      this.delete = false;
      this.misFavoritos.unshift(card); //el unshift coloca el elemento al principio del array
    }
    localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
    return this.delete
  }

  verificarFavoritos(card: any) {
    return !!this.misFavoritos.find(c => c.id === card.id)
  }

  get localCards() {
    return [...this.misFavoritos];
  }
}
