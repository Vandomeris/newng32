import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFetchService } from '../../product-fetch.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private productFetch: ProductFetchService) { }

  id: number = Number(this.route.snapshot.paramMap.get('id'))

  post$ = this.productFetch.getPost(this.id)

}

