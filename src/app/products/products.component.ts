import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Types';
import { ProductFetchService } from '../product-fetch.service';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, RouterLink, FormsModule, NgClass, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private productFetch: ProductFetchService) { }

  products$ = this.productFetch.getProducts()

  test: string = 'text-red-500 text-4xl'
  toggle: boolean = false

  doSome() {
    alert('Что-то произошло')
  }
}
