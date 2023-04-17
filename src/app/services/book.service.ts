import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


  getBooks(){
    return this.http.get('http://localhost:8000/api/books');
  }
  deleteBook(id:any){
    return this.http.delete(`http://localhost:8000/api/book/${id}`);
  }
  newBook(book:any){
    return this.http.post('http://localhost:8000/api/book', book);
  }
}
