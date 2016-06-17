import { Component } from "@angular/core";
import { MeteorComponent } from "angular2-meteor";
import { RouteParams } from "@angular/router-deprecated";
import { DailyLogCollection } from "../../collections/daily-log.collection";

@Component( {
    selector: "daily-log-details",
    templateUrl: "/imports/daily-log/client/daily-log-details/daily-log-details.component.html"
} )
export class DailyLogDetailsComponent extends MeteorComponent {
    logEntry: DailyLogEntry;

    constructor( params: RouteParams ) {
        super();
        let entryId = params.get( "entryId" );

        this.subscribe( "dailyLog", () => {
            this.logEntry = DailyLogCollection.findOne( entryId );
        }, true );
    }
}
