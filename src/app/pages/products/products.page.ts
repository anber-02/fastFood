import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodServiceService } from '../../services/foodService/food-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  categorias: any;
  productForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder, 
    private foodService: FoodServiceService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
      category_id: ['1', Validators.required]
    })

    this.foodService.getCategories().subscribe((data:any)=>{
      this.categorias = data
    })
  }

  guardarProducto() {
    if (this.productForm.valid) {
      this.foodService.createProduct(this.productForm.value).subscribe((data)=>{
        console.log(data)
        if(data){
          this.router.navigate(['/tabs/tab3'])
        }
      })
    }
  }

  handleChange(event:any){

  }



}
