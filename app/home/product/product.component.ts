import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BusService} from "../../services/bus.service";
import {RouterExtensions} from "nativescript-angular";
import {OrderSaleService} from "../../services/order-sale.service";

@Component({
    moduleId: module.id,
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @Output() selectedProduct: EventEmitter<any> = new EventEmitter();
    constructor(private router: RouterExtensions,
                private busService: BusService,
                private orderSale: OrderSaleService) {
    }

    ngOnInit() {
    }

    pageLoaded() {}

    setProduct2() {
        this.selectedProduct.emit("Producto de test pues!");
        /*this.router.navigate(["/home/order"]).then(() => {
            this.busService.broadcast("product-selection-data", "Producto de test pues!");
        });*/
    }

    setProduct() {
        this.router.navigate(["/home/order"]).then(() => {
            this.orderSale.setProduct("product-selection-data");
            /*this.busService.broadcast("product-selection-data", "Producto de test pues!");*/
        });
    }

}
