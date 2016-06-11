import { DailyLogCollection } from "../../../collections/daily-log.collection";
import { DailyLogTestEntries } from "./daily-log-data.constant";

export function insertAllTestData() {
    insertData( DailyLogCollection, DailyLogTestEntries );
}

function insertData( collection: Mongo.Collection<Object>, list: Array<Object> ) {
    if ( collection.find().count() === 0 ) {
        for ( let item of list) {
            console.log("inserting: " + item);
            collection.insert( item );
        }
    }
}

