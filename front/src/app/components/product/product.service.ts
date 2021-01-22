import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  url = 'http://localhost:4001/products'
  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
    ) 
  { }

  showMessage(msg: string, isError: boolean = false) : void {
    this.snackbar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: 'right',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
      verticalPosition: 'top'
    })
  }
  insertDatabase(product: Product) : Observable<Product>{
    return this.http.post<Product>(this.url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readDatabase() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)))
  }

  readById(id: string | number) : Observable<Product> {
    const uri = `${this.url}/${id}`
    return this.http.get<Product>(uri).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)))
  }
  
  updatedDatabase(product: Product) : Observable<Product> {
    const uri = `${this.url}/${product.id}`
    return this.http.put<Product>(uri, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)))
  }

  deleteById(id: string | number) : Observable<Product> {
    const uri = `${this.url}/${id}`
    return this.http.delete<Product>(uri).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)))
  }

  // errors

  errorHandler(e: any): Observable<any> {
    console.log(e.name);
    this.showMessage('Ocorreu um erro', true)
     return EMPTY
  }
}
