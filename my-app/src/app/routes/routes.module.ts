import { ReactiveFromComponent } from './../reactive-from/reactive-from.component';
import { TempFromComponent } from './../temp-from/temp-from.component';
import { BookComponent } from './../book/book.component';
import { LaptopComponent } from './../laptop/laptop.component';
import { MobileComponent } from './../mobile/mobile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// var id = 1001;
// /:id   = /1001

const appRoutes: Routes = [
  { path: 'mobile', component: MobileComponent },
  { path: 'lapi/:id', component: LaptopComponent },
  { path: 'book', component: BookComponent },
  { path: 'temp', component: TempFromComponent },
  { path: 'react', component: ReactiveFromComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutesModule {}
