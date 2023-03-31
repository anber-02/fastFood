import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from '../../services/foodService/food-service.service';
import { Product } from '../../models/product.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  id: string | null = '';
  product !:Product;
  categorias: any;
  productForm: FormGroup = new FormGroup({});

  
  constructor(
    private formBuilder: FormBuilder,
    private foodService: FoodServiceService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private toastController:ToastController
  ) { }

  ngOnInit() {
    this.initialForms()
    this.getCategories()

    // this.activatedRouter.params.subscribe((params:any)=>{
    //   console.log(params, 'hola ')
    //   // this.productForm.reset(food) para rellenar el formulario
    // })
    this.id = this.activatedRouter.snapshot.queryParamMap.get('id')
    this.getProductById()
  }

  guardarProducto() {
    if (this.productForm.valid) {
      if(this.id){
        console.log('de que entro aqui')
        this.foodService.updateProduct(this.productForm.value, this.id).subscribe(data=>{
          this.presentToast('Producto actualizado correctamente', 'bottom', 'check')
          this.router.navigate(['/admin-producto'])
        })
      }else{
        this.foodService.createProduct(this.productForm.value).subscribe((data) => {
          console.log(data)
          if (data) {
            this.router.navigate(['/tabs/tab3'])
          }
        })
      }
    }
  }

  initialForms() {
    this.productForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
      category_id: ['', Validators.required]
    })
  }
  getCategories() {
    this.foodService.getCategories().subscribe((data: any) => {
      this.categorias = data
    })
  }
  handleChange(event: any) {

  }
  
  getProductById(){
    if(this.id){
      this.foodService.getProductById(this.id).subscribe((data:any) => {
        // this.product = data
        console.log(data, 'dentro de product')
        this.productForm.reset(data)//resetea el formulario y lo rellena con los datos recicbidos
        // this.initialForms()
      })
    }
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
