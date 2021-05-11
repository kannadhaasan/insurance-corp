import { Injectable } from '@angular/core';
import { Products } from '../types/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApplicantDetails } from '../types/applicant-details';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Array<Products>>{
    const url = environment.products;
    let productList: Array<Products> = new Array<Products>();
      return Observable.create(observer => {
        this.http.get(
          url, {observe: 'body'}
        ).subscribe(
          (result: Array<Products>)=> {
            result.forEach((product: Products) => {
              productList.push(product);
            });
            observer.next(productList);
            observer.complete();
          },
          (error) => {
            console.log(JSON.stringify(error));
            observer.error(error);
            observer.complete();
          }
          );
      });
    }
  
}
