import { DailyReportsCollection } from "../../../collections/dailyreports.collection";
import { DailyReports } from "./daily-reports-data.constant";

export function insertAllTestData() {
    insertData( DailyReportsCollection, DailyReports );
}

function insertData( collection: Mongo.Collection<Object>, list: Array<Object> ) {
    if ( collection.find().count() === 0 ) {
        for ( let item of list) {
            console.log("inserting: " + item);
            collection.insert( item );
        }
    }
}
