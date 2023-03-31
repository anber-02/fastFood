import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Product } from '../../models/product.model';
import { AuthServiceService } from '../../services/authService/auth-service.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  id: string | null = '';
  product !:Product;
  categorias: any;
  productForm: FormGroup = new FormGroup({});

  
  constructor(
    private formBuilder: FormBuilder,
    private toastController:ToastController,
    private authService:AuthServiceService
  ) { }

  ngOnInit() {
    this.initialForms()
  }

  registarUsuario() {
    if (this.productForm.valid) {
     this.authService.register(this.productForm.value).subscribe((data:any)=>{
      console.log(data)
      this.presentToast('Registrado correctamente', 'bottom', 'check')
     })
    }
  }

  initialForms() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
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
