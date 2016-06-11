import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { DailyLogCollection } from "../../../collections/daily-log.collection";
import { Mongo } from "meteor/mongo";
import { RouterLink } from "@angular/router-deprecated";


@Component( {
    selector: "daily-log-list",
    templateUrl: "/client/imports/daily-log-list/daily-log-list.component.html",
    directives: [ RouterLink ]
} )
export class DailyLogListComponent {
    logEntries: Mongo.Cursor<DailyLogEntry>;

    constructor() {
        this.logEntries = DailyLogCollection.find();
    }

    removeEntry( entry ) {
        DailyLogCollection.remove( entry._id );
    }
}