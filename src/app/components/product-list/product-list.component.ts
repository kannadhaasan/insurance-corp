import { createHostListener } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Products } from '../../types/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public dataSource: Array<Products> = new Array<Products>();
  public isFailedToGetData: boolean = false;

  constructor(
    private products: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.products.getProducts().subscribe((product: Array<Products>) => {
      this.dataSource = product;
    },
    error => {
      this.isFailedToGetData = true;
      console.error('Sorry, something went wrong. Error in loading Products.');
      console.error(error);
    }
    )
  }

  public goToProductDetail(url: string){
    window.open(url);
  }

}

