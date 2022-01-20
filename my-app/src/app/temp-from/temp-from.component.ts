import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-from',
  templateUrl: './temp-from.component.html',
  styleUrls: ['./temp-from.component.css'],
})
export class TempFromComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  catchVal(tempVar: any) {
    console.log(' tempVar', tempVar);
  }
}
