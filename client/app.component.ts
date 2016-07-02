import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrap } from "angular2-meteor-auto-bootstrap";
import { DailyLogComponent } from "../imports/daily-log/client/daily-log.component";

// import {enableProdMode} from "@angular/core";
// enableProdMode();




@Component( {
    selector: "app",
    templateUrl: "/client/app.component.html",
    directives: [ DailyLogComponent]
} )
class AppComponent {

}

bootstrap( AppComponent);