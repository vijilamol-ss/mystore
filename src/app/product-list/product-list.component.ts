import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'; // interface importing
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []; // interface Product is assigned to a variable
  // dependency injection buy using the constructor
  constructor(private productService: ProductService) {
      // this.productList = this.productService.getProducts(); // for getting the product
      this.productService.getProducts()
      .subscribe( (response: Product[]) => {
      this.productList = response;
      } );
    }

  ngOnInit() {
  }

}
