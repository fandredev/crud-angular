import { Component, OnInit } from '@angular/core';
import { Product } from './../product/product.model';
import { ProductService } from './../product/product.service';

type displayedColumns = [...string[]]
@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {

  products: Product[]
  product: Product
  displayedColumns: displayedColumns = ['id','name','price', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void { // ComponentDidMount ou useEffect
    this.productService.readDatabase().subscribe(products => {
      this.products = products
      console.log(products);
    })
  }
}
