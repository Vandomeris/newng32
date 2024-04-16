import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/Types';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-compilation',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './compilation.component.html',
  styleUrl: './compilation.component.scss'
})
export class CompilationComponent {

  @Input({ required: true }) title?: string
  @Input({ required: true }) dishes?: Recipe[]

}
