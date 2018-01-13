import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import {OrderComponent} from "./order/order.component";
import {OrdersComponent} from "./orders/orders.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {DebtsComponent} from "./debts/debts.component";
import {ClientComponent} from "./client/client.component";
import {ClientsComponent} from "./clients/clients.component";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        OrderComponent,
        OrdersComponent,
        ProductComponent,
        ProductsComponent,
        DebtsComponent,
        ClientComponent,
        ClientsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
