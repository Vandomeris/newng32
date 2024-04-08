import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, fetchProducts } from './models/Types';
@Injectable({
  providedIn: 'root'
})
export class ProductFetchService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
