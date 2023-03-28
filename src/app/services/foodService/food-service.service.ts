import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../../models/product.model';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  //creando un observable
  private _refresh = new Subject<void>()
  // private _refresh = new BehaviorSubject([]) ->siempre manda un valor
  constructor(private http:HttpClient) { }

  get refresh(){
    return this._refresh
  }


  getProductById(id:string){
    return this.http.get(`${environment.apiURL}/product/${id}`)
  }

  getCards():Observable<Product>{
    return this.http.get<Product>(`${environment.apiURL}/products`);
  }

  createProduct(data : any):Observable<any>{
   return this.http.post(`${environment.apiURL}/nuevoProducto`, data)
    .pipe(
      tap(() => {
          // se ejecuta antes de guardar la data
          this._refresh.next(data)
        }
      )
    )
  }

  updateProduct(data:Product, id:string){
    console.log(id)
    return this.http.put(`${environment.apiURL}/product/${id}`, data)
  }

  getCategories(){
    return this.http.get(`${environment.apiURL}/categorias`)
  }

  createCategory(data:any){
    this.http.post(`${environment.apiURL}/nuevaCategoria`, data).subscribe(d => console.log(d))
  }

  deleteProduct(id:number){
    return this.http.delete(`${environment.apiURL}/product/${id}`)
    .pipe(
      tap(()=>{
        this._refresh.next()
      })
    )
  }
}
