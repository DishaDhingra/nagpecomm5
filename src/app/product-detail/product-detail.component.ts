import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService, private route : ActivatedRoute, private router: Router) { }
  products: IProduct[] = [];
  errorMessage: string;
  productIdentity: number;

  ngOnInit() {
      this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });

    let id = +this.route.snapshot.paramMap.get('id');
    this.productIdentity = id;
  }

  backInCatalog() {
    this.router.navigate(['/category']);
  }

  

}
