import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'Model/product.model';
import { ProductService } from '../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  
  products: Array<Product> = [];

  

  
  constructor(public prodService:ProductService) {
  }

  ngOnInit(): void {
      this.getProducts();
      
    }

    getProducts(): void {
      this.prodService.getProducts().subscribe({
        next: data => { this.products = data},
        error : err => {console.log(err)}        
        }
      );
    }


  changeEligProduct(product: Product) {

  this.prodService.changeElig(product)
    .subscribe({
      next :updatedProduct => {
        product.eligible=!product.eligible;
        //this.getProducts();
      }
    })
  }
   

  deleteProduct(product: Product): void {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      
    
    this.prodService.deleteProduct(product).subscribe({
      next:value => {
        //this.getProducts();
        this.products=this.products.filter(p=>p.id!=product.id);
        
      }
    })
  }
}




}
