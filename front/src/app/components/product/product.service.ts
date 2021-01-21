import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  url = 'http://localhost:4001/products'
  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient) 
  { }

  showMessage(msg: string) : void {
    this.snackbar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
  insertDatabase(product: Product) : Observable<Product>{
    return this.http.post<Product>(this.url, product)
  }

  readDatabase() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }
}
