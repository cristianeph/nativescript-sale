import {Component, NgZone, OnInit} from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import {BusService} from "../../services/bus.service";
import {OrderSaleService} from "../../services/order-sale.service";

@Component({
    moduleId: module.id,
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
    public product_description: string;
    public client_description: string;


    constructor(private router: RouterExtensions,
                private busService: BusService,
                private zone: NgZone,
                private orderSale: OrderSaleService) {
        /*this.zone = new NgZone({ enableLongStackTrace: false });*/
    }

    ngOnInit() {
    }

    pageLoaded() {
        console.log("Order page => Loaded");
        this.product_description = (this.orderSale.getProduct()) ? this.orderSale.getProduct() : "";
        this.client_description = "";
        /*this.listenActions();*/
    }

    listenActions() {
        this.busService.subscribe("product-selection-data", (data) => {
            this.setProduct(data);
        });
        this.busService.subscribe("client-selection-data", (data) => {
            this.setClient(data);
        });
    }

    setProduct(data) {
        this.zone.run(() => {
            this.product_description = data;
            console.log("product-selection =>", this.product_description);
        });
    }

    setClient(data) {
        this.zone.run(() => {
            this.client_description = data;
            console.log("client-selection =>", this.client_description);
        });
    }

    testRedirect() {
        this.router.navigate(["/home/product"]);
    }

}
