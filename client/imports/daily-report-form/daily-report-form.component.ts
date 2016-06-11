import { Component } from "@angular/core";
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";
import { DailyReportsCollection } from "../../../collections/dailyreports.collection";

@Component( {
    selector: "daily-report-form",
    templateUrl: "/client/imports/daily-report-form/daily-report-form.component.html"
} )
export class DailyReportFormComponent {
    dailyReportForm: ControlGroup;

    constructor() {
        let formBuilder = new FormBuilder();

        this.dailyReportForm = formBuilder.group( {
            day: [ "2016-06-11", Validators.required ],
            brainDump: [ "", Validators.required ],
            enjoyed: [ "", Validators.minLength(10) ]
        } );
    }

    addLogEntry( logEntry ) {
        if ( this.dailyReportForm.valid ) {
            DailyReportsCollection.insert( logEntry );

            (<Control>this.dailyReportForm.controls[ "day" ]).updateValue( "2016-06-11" );
            (<Control>this.dailyReportForm.controls[ "brainDump" ]).updateValue( "" );
            (<Control>this.dailyReportForm.controls[ "enjoyed" ]).updateValue( "" );
        }
    }
}
