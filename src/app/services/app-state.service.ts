import { Injectable } from '@angular/core';
import { Product } from 'Model/product.model';



@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public appState: any = {

    totalValue: 0,
    products: Array<Product>,
    searchTerm: '',
    pageSize :10,// Number of items to display per page
    currentPage : 1 ,// Current page number
    totalPnl:0,
    numberFunds:0,
    loadingStatus:'Error'

  }

  constructor() { }
  
  public setProductState(state:any){
    this.appState={...this.appState, ...state}
  }

}
