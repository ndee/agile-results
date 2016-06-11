import { Meteor } from"meteor/meteor";
import { insertAllTestData } from "../imports/test-data/server/insert-all-test-data.function";

Meteor.startup( insertAllTestData );
 