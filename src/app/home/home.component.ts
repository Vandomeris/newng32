import { Component, OnInit } from "@angular/core";
import { HomeSliderComponent } from "../components/home-slider/home-slider.component";
import { CompilationComponent } from "../components/compilation/compilation.component";
import { RecipesService } from "../serives/recipes.service";
import { Recipe } from "../models/Types";
import { AsyncPipe } from "@angular/common";
import { HomeCategoriesComponent } from "../components/home-categories/home-categories.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSliderComponent, CompilationComponent, AsyncPipe, HomeCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private recipesService: RecipesService) { }


  deliciousCompilation$ = this.recipesService.getDeliciousCompilation()

  $sweetCompilation$ = this.recipesService.getSweetCompilation()

}
