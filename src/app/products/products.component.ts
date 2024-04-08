import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Types';
import { ProductFetchService } from '../product-fetch.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private productFetch: ProductFetchService) { }

  products$ = this.productFetch.getProducts()

}
