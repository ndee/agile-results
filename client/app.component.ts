import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrap } from "angular2-meteor-auto-bootstrap";
import { DailyLogListComponent } from "./imports/daily-log-list/daily-log-list.component";
import { DailyLogFormComponent } from "./imports/daily-log-form/daily-log-form.component";


@Component({
    selector: "app",
    templateUrl: "/client/app.component.html",
    directives: [DailyLogListComponent, DailyLogFormComponent]
})
class AppComponent {


}

bootstrap(AppComponent);