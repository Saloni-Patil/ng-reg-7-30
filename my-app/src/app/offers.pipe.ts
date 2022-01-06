import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offers',
})
export class OffersPipe implements PipeTransform {
  // rest and spreadOps
  transform(value: number) {
    return value / 2;
  }
}
