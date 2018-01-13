import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import {OrderComponent} from "./order/order.component";
import {ProductComponent} from "./product/product.component";
import {ClientComponent} from "./client/client.component";
import {ClientsComponent} from "./clients/clients.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "order", component: OrderComponent
    },
    {
        path: "product", component: ProductComponent
    },
    {
        path: "products", component: ProductsComponent
    },
    {
        path: "client", component: ClientComponent
    },
    {
        path: "clients", component: ClientsComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
