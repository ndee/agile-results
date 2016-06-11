import { DailyLogCollection } from "../collections/daily-log.collection";
import { Meteor } from "meteor/meteor";

Meteor.publish( "dailyLog", function () {
 //   if ( this.userId ) {
        return DailyLogCollection.find();
 //   }
} );
