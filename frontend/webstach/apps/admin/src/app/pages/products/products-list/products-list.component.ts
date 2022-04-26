import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@webstach/products';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  products = [];

  constructor(
    private productsService: ProductsService

  ) { 
  }

  ngOnInit(): void {
    this._getProducts();
  }
  private _getProducts() {
    this.productsService.getProducts().subscribe(products => {
        this.products = products;
      }
    )
  }

}
