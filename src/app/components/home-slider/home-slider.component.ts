import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { SwiperOptions } from 'swiper/types';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RecipesService } from '../../serives/recipes.service';

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [CommonModule, SwiperDirective, AsyncPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.scss'
})
export class HomeSliderComponent {

  constructor(private recipesService: RecipesService) { }

  sliderRecipes$ = this.recipesService.getSliderRecipes()



  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
    slidesPerView: 'auto',
  };
}
