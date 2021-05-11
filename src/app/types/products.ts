export class Products {
public productId: string;
public productName: string;
public productDescription: string;
public image: string;
public productUrl: string;

constructor (item?: Products | any) {
    this.productId = item.productId;
    this.productName = item.productName;
    this.productDescription = item.productDescription;
    this.image = item.image;
    this.productName = item.productUrl;
}

}
