import { DailyLogCollection } from "../collections/daily-log.collection";
import { Meteor } from "meteor/meteor";

Meteor.publish( "dailyLog", function (entryId: string) {

    if(entryId) {
        return DailyLogCollection.find({_id: entryId });
    } else {
        return DailyLogCollection.find();
    }
    
} );
