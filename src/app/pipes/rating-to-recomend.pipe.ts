import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingToRecomend',
  standalone: true
})
export class RatingToRecomendPipe implements PipeTransform {

  transform(rating: string): number {
    return Number(rating) * 20;
  }

}
