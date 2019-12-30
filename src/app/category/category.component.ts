import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-detail/product.service';
import { IProduct } from '../product-detail/products';


@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: IProduct[] = [];
  errorMessage: string;

  ngOnInit() {
    this.productService.getProducts().subscribe({
    next: products => this.products = products,
    error: err => this.errorMessage = err
  });
}

}
