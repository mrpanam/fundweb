import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductType } from 'Model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit{

  public productForm!:FormGroup;
  productTypes = Object.values(ProductType);

  constructor(private fb: FormBuilder, private productService:ProductService) {
  }
  ngOnInit() {
    this.productForm=this.fb.group({
      name: ['', Validators.required],
  qty: [0, Validators.required],
  boughtPrice: [0, Validators.required],
  currentPrice: [0, Validators.required],
  eligible: [false, Validators.required],
  date: ['', Validators.required],
  type: [ProductType.Bonds, Validators.required]
    });
  }

  saveProduct() {
    let product:Product=this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next : (data: any) => {
        alert(JSON.stringify(data));
      }, error :err => {
        console.log(err);
      }
    });
  }

}
