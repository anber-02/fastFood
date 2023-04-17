import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.page.html',
  styleUrls: ['./new-book.page.scss'],
})
export class NewBookPage implements OnInit {
  book:any;
  bookForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private toastController:ToastController
  ) { }

  ngOnInit() {
    this.initialForms()
  }

  guardarProducto() {
    if (this.bookForm.valid) {
        this.bookService.newBook(this.bookForm.value).subscribe((data) => {
          console.log(data)
          if (data) {
            this.router.navigate(['/tabs/tab1'])
          }
        })
      }
    }

  initialForms() {
    this.bookForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      author: ['', Validators.required],
      editorial: ['', Validators.required],
    })
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
}
