import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
longText : string = "This is the Home card, let's build a nice dashboard";

constructor(public appStateservice:AppStateService){}


calculateTotalPnl(){}

}
