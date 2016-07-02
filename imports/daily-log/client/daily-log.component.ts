import { Component } from "@angular/core";
import { DailyLogListComponent } from "./daily-log-list.component";
import { DailyLogDetailsComponent } from "./daily-log-details.component";
import { DailyLogFormComponent } from "./daily-log-form.component";

@Component( {
    selector: "daily-log",
    templateUrl: "/imports/daily-log/client/daily-log.component.html",
    directives: [ DailyLogListComponent, DailyLogDetailsComponent,DailyLogFormComponent]
} )
export class DailyLogComponent {

    selectedEntryId:string;

    constructor() {
        this.selectedEntryId = null;
    }

    onEntrySelected(entry:DailyLogEntry) {
        this.selectedEntryId = entry._id;
    }
}