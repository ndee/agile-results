import "reflect-metadata";
import "zone.js/dist/zone";
import { Component, Output, EventEmitter } from "@angular/core";
import { MeteorComponent } from "angular2-meteor";
import { DailyLogCollection } from "../collections/daily-log.collection";
import { Mongo } from "meteor/mongo";


@Component( {
    selector: "daily-log-list",
    templateUrl: "/imports/daily-log/client/daily-log-list.component.html"
} )
export class DailyLogListComponent extends MeteorComponent {
    logEntries: Mongo.Cursor<DailyLogEntry>;

    @Output() entrySelected = new EventEmitter<DailyLogEntry>();

    constructor() {
        super();
        this.subscribe( "dailyLog", () => {
            this.logEntries = DailyLogCollection.find();
        }, true );

    }

    selectEntry( entry:DailyLogEntry ) {
        this.entrySelected.emit( entry );
    }

    removeEntry( entry ) {
        DailyLogCollection.remove( entry._id );
    }
}