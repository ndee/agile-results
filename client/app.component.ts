import "reflect-metadata";
import "zone.js/dist/zone";
import { Component, provide } from "@angular/core";
import { bootstrap } from "angular2-meteor-auto-bootstrap";
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from "@angular/router-deprecated";
import { APP_BASE_HREF } from "@angular/common";
import { DailyLogListComponent } from "../imports/daily-log/client/daily-log-list/daily-log-list.component";
import { DailyLogDetailsComponent } from "../imports/daily-log/client/daily-log-details/daily-log-details.component";
import { DailyLogFormComponent } from "../imports/daily-log/client/daily-log-form/daily-log-form.component";


@Component( {
    selector: "app",
    templateUrl: "/client/app.component.html",
    directives: [ ROUTER_DIRECTIVES ]
} )
@RouteConfig( [
    { path: "/", as: "DailyLogList", component: DailyLogListComponent },
    { path: "/log/daily/:entryId", as: "DailyLogDetails", component: DailyLogDetailsComponent },
    { path: "/log/daily/add", as: "DailyLogAdd", component: DailyLogFormComponent }
] )
class AppComponent {
}

bootstrap( AppComponent, [ ROUTER_PROVIDERS, provide( APP_BASE_HREF, { useValue: "/" } ) ] );