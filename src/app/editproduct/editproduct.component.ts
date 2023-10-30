import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductType } from 'Model/product.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productId: number = 0;
  product !: Product;
  productFormGroup!: FormGroup;
  productTypes = Object.values(ProductType);

  constructor(public route: ActivatedRoute, public productservice: ProductService,
     public fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productservice.getProductById(this.productId)
        .subscribe({
          next: product => {
            this.product = product;
            alert(JSON.stringify(product))
            this.buildForm(product);     
            
            
          }
        });
    });
  }

  buildForm(product: Product) {
    this.productFormGroup = this.fb.group({
      id : [product.id],
      name: this.fb.control(product.name),      
      qty: [product.qty, Validators.required],
      boughtPrice: [product.boughtPrice, Validators.required],
      currentPrice: [product.currentPrice, Validators.required],
      eligible: [product.eligible, Validators.required],
      date: [product.date, Validators.required],
      type: [product.type, Validators.required]
    });
  }


  updateProduct() {
    let product : Product = this.productFormGroup.value;
    this.productservice.updateProduct(product).subscribe({
      next : data =>{
        alert(JSON.stringify(data))
        this.router.navigate(['/products']);

      }
    });
    }
}
