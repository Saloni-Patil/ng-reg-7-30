import { ApiService } from './../api.service';
import { Mobile } from './../model/mobile-schema';
// import { MOBILES } from './../database/mobile-data';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent {
  tot: any;
  name: string = 'Alex';
  age: number = 25;
  mobiles: Mobile[] = [];
  // sharedService = new SharedService();
  constructor(private sharedService: SharedService, private _api: ApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._api.getMobileData().subscribe((data: any) => {
      console.log('data', data['mobile']);
      this.mobiles = data['mobile'];
      this.tot = this.sharedService.calcProds(this.mobiles);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobiles = [];
    this.tot = '';
  }

  // sayHello() {
  //   alert('Hello..!');
  // }
  downQuantity(mobile: any) {
    if (mobile.quantity > 0) {
      mobile.quantity--;
    }
  }

  upQuantity(mobile: any) {
    if (mobile.inStock > mobile.quantity) {
      mobile.quantity++;
    }
  }
}
