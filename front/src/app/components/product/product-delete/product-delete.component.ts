import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
    ) { 
  }
    
  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(p => {
      this.product = p
    })
  }
  deleteProduct() : void {
    this.productService.deleteById(this.product.id).subscribe(_ => {
      this.productService.showMessage('Deletado com sucesso')
      this.cancel()
    })
  }
  cancel() : void {
    this.router.navigate(['/products'])
  }
}
