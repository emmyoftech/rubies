import { Component } from "../classes/component.class.js";

export class NavigationComponent extends Component{
    override name: string = "navigation";

    override onReady(): void {
        console.log(`${this.name} component is ready`)
    }
}