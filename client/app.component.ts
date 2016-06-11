import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrap } from "angular2-meteor-auto-bootstrap";
import { DailyReportListComponent } from "./imports/daily-report-list/daily-report-list.component";
import { DailyReportFormComponent } from "./imports/daily-report-form/daily-report-form.component";


@Component({
    selector: "app",
    templateUrl: "/client/app.component.html",
    directives: [DailyReportListComponent, DailyReportFormComponent]
})
class AppComponent {


}

bootstrap(AppComponent);