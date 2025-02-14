import { Component } from "../classes/component.class";

export class LandIngPageComponent extends Component {
    name: string = "landing-page"

    override onReady (){
        console.log(this.name, "is ready")
    };
}