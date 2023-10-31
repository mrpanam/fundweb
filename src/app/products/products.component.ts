import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'Model/product.model';
import { ProductService } from '../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //totalValue: number = 0;
  products: Array<Product> = [];
  //searchTerm: string = '';
  //pageSize = 10; // Number of items to display per page
  //currentPage = 1; // Current page number


  constructor(public prodService: ProductService, public router: Router, public appStateService : AppStateService) {
  }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(): void {
    this.prodService.getProducts().subscribe({
      next: data => { this.products = data.filter(product => product.name.toLowerCase().includes(this.appStateService.appState.searchTerm.toLowerCase()));
      this.calculatePNL(); },
      
      error: err => { console.log(err) }
    }
    );
    this.appStateService.appState.currentPage = 1;
  }


  changeEligProduct(product: Product) {

    this.prodService.changeElig(product)
      .subscribe({
        next: updatedProduct => {
          product.eligible = !product.eligible;
          //this.getProducts();
        }
      })
  }


  deleteProduct(product: Product): void {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {


      this.prodService.deleteProduct(product).subscribe({
        next: value => {
          //this.getProducts();
          this.products = this.products.filter(p => p.id != product.id);

        }
      })
    }
  }

  calculatePortfolioValue() {
    this.appStateService.appState.totalValue = this.products.reduce((sum, product) => sum + (product.qty * product.currentPrice), 0);
    return this.appStateService.appState.totalValue ;
  }

  
  editProduct(product: Product) {
    this.router.navigate(['/editproduct', product.id]);
  }


  calculatePNL(): void {
    this.products.forEach(product => {
      product.pnl = (product.qty * product.currentPrice) - (product.qty * product.boughtPrice);
    });


  }


}
