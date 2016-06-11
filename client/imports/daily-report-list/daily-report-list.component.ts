import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { DailyReportsCollection } from "../../../collections/dailyreports.collection";
import { Mongo } from "meteor/mongo";

@Component( {
    selector: "daily-report-list",
    templateUrl: "/client/imports/daily-report-list/daily-report-list.component.html"
} )
export class DailyReportListComponent {
    dailyReports: Mongo.Cursor<Object>;

    constructor() {
        this.dailyReports = DailyReportsCollection.find();
        console.log( this.dailyReports.fetch() );
    }
}