import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrap } from "angular2-meteor-auto-bootstrap";
import { DailyReports } from "./imports/dailyreports";


@Component({
    selector: "app",
    templateUrl: "client/app.html",
    directives: [DailyReports]
})
class App {


}

bootstrap(App);