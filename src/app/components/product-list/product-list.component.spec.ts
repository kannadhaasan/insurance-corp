import { ProductListComponent } from './product-list.component';
import { Products } from '../../types/products';
import { of, throwError } from 'rxjs'

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

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let productServiceSpy: any;
  beforeEach(() => {
    component = new ProductListComponent(
      productServiceSpy = jasmine.createSpyObj('ProductsService', ['getProducts'])
    )
  });

  it('Prodcut datasource should set value returned from product service', () => {
    productServiceSpy.getProducts.and.returnValue(of(productList));
    component.ngOnInit();
    expect(component.dataSource.length).toBe(2);
  });

  it('getProducts should throw error', () => {
    productServiceSpy.getProducts.and.returnValue(throwError('Error getting data'));
    component.ngOnInit();
    expect(component.isFailedToGetData).toBe(true);
  });
  
});
