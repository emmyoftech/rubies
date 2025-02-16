import { Component } from "../classes/component.class.js";
export class NavigationComponent extends Component {
    constructor() {
        super(...arguments);
        this.name = "navigation";
    }
    onReady() {
        console.log(`${this.name} component is ready`);
    }
}
