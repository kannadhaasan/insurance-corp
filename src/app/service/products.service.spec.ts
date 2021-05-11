import { async, TestBed } from '@angular/core/testing';
import { Products } from '../types/products';
import { of, throwError } from 'rxjs'



import { ProductsService } from './products.service';

const product1 = new Products({
  "productId": 5456312,
  "productName": "Individual Life",
  "productDescription": "Solutions that create real value and grow relationships",
  "image": "https://www.munichre.com/content/dam/munichre/marc/images/New%20Realities.png/_jcr_content/renditions/cropped.3_to_1.png./cropped.3_to_1.png"
})

const product2 = new Products({
  "productId": 5456313,
  "productName": "Group Insurance",
  "productDescription": "Progressing ahead of the industry to help our clients expand insurability and grow profitability",
  "image": "https://www.munichre.com/content/dam/munichre/marc/images/iStock-626582868-family-parents-child-reading.jpg/_jcr_content/renditions/cropped.16_to_9.jpg.image_file.1920.1080.file/cropped.16_to_9.jpg"
})

const productList: Array<Products> = new Array<Products>();
productList.push(product1);
productList.push(product2);
let service: ProductsService; let httpSpy: any;
describe('ProductsService', () => { 
service = new ProductsService(
  httpSpy = jasmine.createSpyObj('httpSpy', ['get'])
)

  
});

it('getProducts should return value as expected', async(() => {//Positive case
  httpSpy.get.and.returnValue(of(productList));
  service.getProducts().subscribe( (data: Array<Products>) => {
    expect(data[0] instanceof Products).toBe(true);
    expect(data.length).toBe(2);
  } );
} ));

it('getProducts should throw error', async(() => {//Negative case
  httpSpy.get.and.returnValue(throwError('Error getting data'));
  service.getProducts().subscribe( (data: Array<Products>) => {
    fail('it should have failed' + data);
  },
  error => {
    expect(error).toBeTruthy();
  }
  );
} ));
