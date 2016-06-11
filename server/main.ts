import { Meteor } from"meteor/meteor";
import { insertAllTestData } from "./imports/test-data/insert-all-test-data";

Meteor.startup( insertAllTestData );
 