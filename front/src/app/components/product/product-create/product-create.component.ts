import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product = Object.freeze({
    name: 'Geladeira',
    price: 1200.31
  })

  constructor(private productService: ProductService,
    private router: Router ) { }

  ngOnInit(): void {}
  
  createProduct() : void {
    this.productService.insertDatabase(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['products'])
    })
  }
  
  cancel() : void {
    this.router.navigate(['products'])
  }
}
