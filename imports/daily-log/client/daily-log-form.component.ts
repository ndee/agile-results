import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";
import { DailyLogCollection } from "../collections/daily-log.collection";


@Component( {
    selector: "daily-log-form",
    templateUrl: "/imports/daily-log/client/daily-log-form.component.html"
} )
export class DailyLogFormComponent {

    @Output() entryAdded;

    logEntryForm: ControlGroup;

    constructor() {
        let formBuilder = new FormBuilder();
        this.entryAdded = new EventEmitter();

        this.logEntryForm = formBuilder.group( {
            day: [ "2016-06-11", Validators.required ],
            brainDump: [ "", Validators.required ],
            enjoyed: [ "", Validators.required ]
        } );
    }

    addLogEntry( logEntry ) {
        if ( this.logEntryForm.valid ) {
            DailyLogCollection.insert( logEntry );

            (<Control>this.logEntryForm.controls[ "day" ]).updateValue( "2016-06-11" );
            (<Control>this.logEntryForm.controls[ "brainDump" ]).updateValue( "" );
            (<Control>this.logEntryForm.controls[ "enjoyed" ]).updateValue( "" );

            this.entryAdded.emit(logEntry);
        }
    }
}
