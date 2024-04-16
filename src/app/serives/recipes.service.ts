import { Injectable } from '@angular/core';
import { Observable, distinct, map } from 'rxjs';
import { SliderRecipe } from '../models/Types';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  private recipesUrl: string = 'https://dummyjson.com/recipes'

  getSliderRecipes(): Observable<SliderRecipe> {
    return this.http.get<SliderRecipe>(this.recipesUrl, {
      params: new HttpParams({
        fromObject: {
          limit: 10
        }
      })
    })
  }

  getDeliciousCompilation() {
    return this.http.get<SliderRecipe>(this.recipesUrl, {
      params: new HttpParams({
        fromObject: {
          limit: 3,
          skip: 10
        }
      })
    })
  }

  getSweetCompilation() {
    return this.http.get<SliderRecipe>(this.recipesUrl, {
      params: new HttpParams({
        fromObject: {
          limit: 3,
          skip: 13
        }
      })
    })
  }

  getCategories() {
    return this.http.get<SliderRecipe>(this.recipesUrl)
  }
}
