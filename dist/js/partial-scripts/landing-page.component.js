"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandIngPageComponent = void 0;
const component_class_1 = require("../classes/component.class");
class LandIngPageComponent extends component_class_1.Component {
    constructor() {
        super(...arguments);
        this.name = "landing-page";
    }
    onReady() {
        console.log(this.name, "is ready");
    }
    ;
}
exports.LandIngPageComponent = LandIngPageComponent;
