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
    logEntries: Mongo.Cursor<Object>;

    constructor() {
        this.logEntries = DailyReportsCollection.find();
    }

    removeEntry( entry ) {
        DailyReportsCollection.remove( entry._id );
    }
}