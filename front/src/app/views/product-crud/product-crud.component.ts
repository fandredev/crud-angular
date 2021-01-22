import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../../components/product/product.model';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  
  product: Product

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(){
    this.router.navigate(['/products/create']) 
  }
}
