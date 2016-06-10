import "reflect-metadata";
import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrap } from "angular2-meteor-auto-bootstrap";


@Component({
    selector: "app",
    templateUrl: "client/app.html"
})
class NDeeman {


}

bootstrap(NDeeman);