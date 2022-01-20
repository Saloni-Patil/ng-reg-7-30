import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent implements OnInit {
  prodId: any;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((res) => {
      this.prodId = res.get('id');
      console.log("res.get('id') : ", res.get('id'));
    });
  }

  ngOnInit(): void {}
}
