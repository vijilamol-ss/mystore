import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = {
    productImage: '/assets/images/image1.png',
    productName: 'comet',
    productDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`
  };
  constructor() { }

  ngOnInit() {
  }

}
