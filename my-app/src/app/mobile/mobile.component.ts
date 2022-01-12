import { Mobile } from './../model/mobile-schema';
import { MOBILES } from './../database/mobile-data';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent {
  // sharedService = new SharedService();
  constructor(private sharedService: SharedService) {
    this.tot = sharedService.calcProds(this.mobiles);
  } // DI
  tot: any;
  name: string = 'Alex';
  age: number = 25;

  mobiles: Mobile[] = MOBILES;
}
