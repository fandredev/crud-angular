import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../../components/product/product.model';
import { HeaderService } from './../../components/template/header/header.service';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  
  product: Product

  constructor(private router: Router, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  navigateToProductCreate(){
    this.router.navigate(['/products/create']) 
  }
}
