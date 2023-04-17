import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  books:any
  constructor(private bookService:BookService) {
    this.bookService.getBooks().subscribe((data:any) => {
      this.books = data.data
    })
  }

  handleDelete(id:any){
    this.bookService.deleteBook(id).subscribe(data=>{
      console.log(data)
    })
  }

}

