import { Component, Input } from "@angular/core";
import { MeteorComponent } from "angular2-meteor";
import { DailyLogCollection } from "../collections/daily-log.collection";

@Component( {
    selector: "daily-log-details",
    templateUrl: "/imports/daily-log/client/daily-log-details.component.html"
} )
export class DailyLogDetailsComponent extends MeteorComponent {

    logEntry: DailyLogEntry;

    constructor() {
        super();
    }

    @Input()
    set entryId (entryId: string) {
        if(entryId) {
            this.subscribe( "dailyLog", () => {
                this.logEntry = DailyLogCollection.findOne( entryId );
            }, true );
        }
    }

}
