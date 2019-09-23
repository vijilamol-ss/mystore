import { Injectable } from '@angular/core';
import { Product } from '../models/product'; // imported the model (path is specified)
import { HttpClient } from '@angular/common/http'; // imported for performs HTTP requests.

// this service is injected to the root of the app
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //  for product concatenation without api
  productList: Product[] = [];
  // [
  //   {
  //     productImage: '/assets/images/image2.png',
  //     productName: 'comet',
  //     productDescription:
  //     `Some quick example text to build on the card title
  //     and make up the bulk of the card's content.`,
  //     isAvailable: true
  //   },
  //   {
  //     productImage: '/assets/images/image1.png',
  //     productName: 'comet',
  //     productDescription:
  //     `Some quick example text to build on the card
  //     title and make up the bulk of the card's content.`,
  //     isAvailable: true
  //   },
  //   {
  //     productImage: '/assets/images/image3.png',
  //     productName: 'comet',
  //     productDescription:
  //     `Some quick example text to build on the card
  //     title and make up the bulk of the card's content.`,
  //     isAvailable: false
  //   }
  // ];
  constructor(
    //  for dependency injection
    private httpClient: HttpClient // (httpClient is our variable)
    // HttpClient service is available as an injectable class,with methods to perform HTTP requests.
  ) { }

  getProducts() { // by using an API here we can get the data
    // return this.productList;
    return this.httpClient.get('http://localhost:3000/product'); // for dependency injection
  }
}
