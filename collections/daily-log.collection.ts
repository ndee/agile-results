import {Mongo} from "meteor/mongo";

export let DailyLogCollection = new Mongo.Collection<DailyLogEntry>("dailyLog");