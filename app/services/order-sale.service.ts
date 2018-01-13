import {Injectable} from '@angular/core';

@Injectable()
export class OrderSaleService {
    product: string;

    constructor() {
    }

    setProduct(product: string) {
        this.product = product;
    }

    getProduct() {
        return this.product;
    }

}
