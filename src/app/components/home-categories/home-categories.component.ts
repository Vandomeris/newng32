import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../serives/recipes.service';

@Component({
  selector: 'app-home-categories',
  standalone: true,
  imports: [],
  templateUrl: './home-categories.component.html',
  styleUrl: './home-categories.component.scss'
})
export class HomeCategoriesComponent implements OnInit {

  constructor(private recipeService: RecipesService) { }

  categories?: string[]

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe((result) => {
      this.categories = [...new Set(result.recipes.map(item => {
        return item.cuisine
      }))]
    })
  }

}
