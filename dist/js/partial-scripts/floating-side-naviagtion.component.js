import { Component } from "../classes/component.class.js";
export class FloatingSideNaviagtionComponent extends Component {
    constructor() {
        super(...arguments);
        this.name = "floating-side-navigation";
    }
    onReady() {
        this.runDropDown();
    }
    runDropDown() {
        const allDropLinks = this.componentBody.querySelectorAll(".drop-down");
        for (const linkElement of allDropLinks) {
            linkElement.onclick = (e) => {
                var _a, _b;
                (_a = linkElement.querySelector("div")) === null || _a === void 0 ? void 0 : _a.classList.toggle("open");
                (_b = linkElement.querySelector("span")) === null || _b === void 0 ? void 0 : _b.classList.toggle("spin");
            };
        }
    }
}
