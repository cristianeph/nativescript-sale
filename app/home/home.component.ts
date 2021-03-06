import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router: RouterExtensions) {
    }

    ngOnInit(): void {
    }

    pageLoaded() {
        this.router.navigate(["/home/order"]);
    }
}
