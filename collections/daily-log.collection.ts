import { Mongo } from "meteor/mongo";

export let DailyLogCollection = new Mongo.Collection<DailyLogEntry>( "dailyLog" );

DailyLogCollection.allow( {
    insert: function () {
        let user = Meteor.user();
        return !!user;
    },
    update: function () {
        let user = Meteor.user();
        return !!user;
    },
    remove: function () {
        let user = Meteor.user();
        return !!user;
    }
} );