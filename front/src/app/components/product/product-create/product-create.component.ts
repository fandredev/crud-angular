import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  props = 'Whatever'

  constructor() { }

  ngOnInit(): void {
  }
  buyAProduct(){
    console.log('kkk');
    
  }

}
