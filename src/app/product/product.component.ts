import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // @Input(productProperties) product: any;--can be used uses either one of two
  @Input() productProperties: any;
  constructor(private router: Router) { }
  addToCart() {
    console.log('clicked');
  }
goToDetails(productId) {
  this.router.navigate(['product', productId]);
}

  ngOnInit() {
  }

}

