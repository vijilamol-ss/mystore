import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // @Input(productProperties) product: any;--can be used uses either one of two
  @Input() productProperties: any;
  constructor() { }
  addToCart() {
    console.log('clicked');
  }
  ngOnInit() {
  }

}

