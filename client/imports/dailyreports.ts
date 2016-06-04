import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { DailyReports } from '../../collections/dailyreports'

@Component({
    selector: 'app',
    templateUrl: 'client/dailyreports.html'
})
class NDeeman {
    dailyReports: Mongo.Cursor<Object>;

    constructor() {
        this.dailyReports = DailyReports.find();
        console.log(this.dailyReports.fetch());
    }
}

bootstrap(NDeeman);