import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrap } from "angular2-meteor-auto-bootstrap";
import { DailyReportsCollection } from "../../collections/dailyreports";
import { Mongo } from "meteor/mongo";

@Component({
    selector: "app",
    templateUrl: "client/dailyreports.html"
})
class DailyReports {
    dailyReports: Mongo.Cursor<Object>;

    constructor() {
        this.dailyReports = DailyReportsCollection.find();
        console.log(this.dailyReports.fetch());
    }
}

bootstrap(DailyReports);