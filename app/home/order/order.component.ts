import {Component, NgZone, OnInit} from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import {BusService} from "../../services/bus.service";

@Component({
    moduleId: module.id,
    selector: 'app-home/order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
    product_description: string;
    client_description: string;

    constructor(private router: RouterExtensions,
                private busService: BusService,
                private ngZone: NgZone) {
    }

    ngOnInit() {
    }

    pageLoaded() {
        this.product_description = "";
        this.client_description = "";
        this.listenActions();
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
        this.ngZone.run(() => {
            this.product_description = data;
            console.log("product-selection", data);
        });
    }

    setClient(data) {
        this.ngZone.run(() => {
            this.client_description = data;
            console.log("client-selection", data);
        });
    }

    testRedirect() {
        this.router.navigate(["/home/product"]);
    }

}
