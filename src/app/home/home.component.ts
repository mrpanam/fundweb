import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { Product } from 'Model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
longText : string = "This is the Home card, let's build a nice dashboard";
notElig: number = 0;

constructor(public appStateservice:AppStateService){}
  

totalElig(){
  this.notElig= this.appStateservice.appState.products.
  filter((p:Product)=>!p.eligible).length;  
  return this.notElig;

}



}
