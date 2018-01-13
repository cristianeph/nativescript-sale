import {Component, OnInit} from '@angular/core';
import {BusService} from "../../services/bus.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
    moduleId: module.id,
    selector: 'app-home/product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    constructor(private router: RouterExtensions,
                private busService: BusService) {
    }

    ngOnInit() {
    }

    setProduct() {
        this.busService.broadcast("product-selection-data", "Producto de test pues!");
        this.router.navigate(["/home/order"]);
    }

}
