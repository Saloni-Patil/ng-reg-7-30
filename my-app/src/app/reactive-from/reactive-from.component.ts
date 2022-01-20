import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css'],
})
export class ReactiveFromComponent {
  formObj = new FormGroup({
    uNameObj: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    passObj: new FormControl('', Validators.required),
  });

  get uName() {
    return this.formObj.get('uNameObj');
  }
}
