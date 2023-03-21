import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodServiceService } from '../../services/foodService/food-service.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.page.html',
  styleUrls: ['./add-categoria.page.scss'],
})
export class AddCategoriaPage implements OnInit {

  categoryForm:FormGroup | any;
  constructor(
    private formBuilder:FormBuilder,
     private foodService: FoodServiceService,
     private router:Router
     ) { 

  }
  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      nombre:['',Validators.required],
    })
  }

  createCategory(){
    if(!this.categoryForm.valid){
      return false;
    }

    this.foodService.createCategory(this.categoryForm.value)
      this.router.navigate(['/tabs/tab3'])

    
    return true
  }


}


