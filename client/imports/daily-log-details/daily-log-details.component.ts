import { Component, NgZone } from "@angular/core";
import { RouteParams } from "@angular/router-deprecated";
import { Tracker } from "meteor/tracker";
import { DailyLogCollection } from "../../../collections/daily-log.collection";

@Component( {
    selector: "daily-log-details",
    templateUrl: "./client/imports/daily-log-details/daily-log-details.component.html"
} )
export class DailyLogDetailsComponent {
    logEntry: DailyLogEntry;

    constructor( params: RouteParams, ngZone: NgZone ) {
        let entryId = params.get( "entryId" );

        Tracker.autorun( () => {
            ngZone.run( () => {
                this.logEntry = DailyLogCollection.findOne( entryId );
            } );
        } );

    }
}
