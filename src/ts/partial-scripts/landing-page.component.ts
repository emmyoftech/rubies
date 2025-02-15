import { Component } from "../classes/component.class.js";

export class LandIngPageComponent extends Component {
    name: string = "landing-page"

    override onReady (){
        console.log(this.name, "is ready")
    };
}