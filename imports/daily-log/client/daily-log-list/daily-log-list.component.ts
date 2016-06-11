import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { MeteorComponent } from "angular2-meteor";
import { DailyLogCollection } from "../../collections/daily-log.collection";
import { Mongo } from "meteor/mongo";
import { RouterLink } from "@angular/router-deprecated";
import { LoginButtons } from "angular2-meteor-accounts-ui";


@Component( {
    selector: "daily-log-list",
    templateUrl: "/imports/daily-log/client/daily-log-list/daily-log-list.component.html",
    directives: [ RouterLink, LoginButtons ]
} )
export class DailyLogListComponent extends MeteorComponent {
    logEntries: Mongo.Cursor<DailyLogEntry>;

    constructor() {
        super();
        this.subscribe( "dailyLog", () => {
            this.logEntries = DailyLogCollection.find();
        }, true );

    }

    removeEntry( entry ) {
        DailyLogCollection.remove( entry._id );
    }
}