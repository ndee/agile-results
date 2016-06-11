import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { DailyReportsCollection } from "../../collections/dailyreports";
import { Mongo } from "meteor/mongo";

@Component({
    selector: "daily-reports",
    templateUrl: "client/imports/dailyreports.html"
})
export class DailyReports {
    dailyReports: Mongo.Cursor<Object>;

    constructor() {
        this.dailyReports = DailyReportsCollection.find();
        console.log(this.dailyReports.fetch());
    }
}