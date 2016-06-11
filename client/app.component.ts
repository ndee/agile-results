import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrap } from "angular2-meteor-auto-bootstrap";
import { DailyReportListComponent } from "./imports/daily-report-list/daily-report-list.component";


@Component({
    selector: "app",
    templateUrl: "/client/app.component.html",
    directives: [DailyReportListComponent]
})
class AppComponent {


}

bootstrap(AppComponent);