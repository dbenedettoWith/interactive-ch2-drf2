import { Product, PublisherInfo } from './../models/product.models';
import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../services/data-retriever.service';
import { map } from 'rxjs/operators';
import { forkJoin, Observable, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  products: Product[] = [];

  constructor(private dataService: DataRetrieverService) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.products$ = this.retrieveProductsParallel();
    //uncomment to retrieve the products sequentially
    // this.products$ = this.retrieveProductsSeq();
  }

  private retrieveProductsParallel(): Observable<Product[]> {
    //TODO provide implementation
    return null;
  }

  private retrieveProductsSeq(): Observable<Product[]> {
    //TODO provide implementation
    return null;
  }
}
