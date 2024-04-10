import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SliderRecipe } from '../models/Types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getSliderRecipes(): Observable<SliderRecipe> {
    return this.http.get<SliderRecipe>('https://dummyjson.com/recipes?limit=10')
  }
}
