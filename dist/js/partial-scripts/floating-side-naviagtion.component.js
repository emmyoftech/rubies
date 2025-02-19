import { Component } from "../classes/component.class.js";
export class FloatingSideNaviagtionComponent extends Component {
    constructor(event) {
        super();
        this.name = "floating-side-navigation";
        this.event = event;
    }
    onReady() {
        var _a;
        this.runDropDown();
        this.event.on("toggle", () => {
            this.componentBody.classList.toggle("open");
        });
        (_a = this.componentBody.querySelector(".close-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            this.event.emit("toggle");
        });
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
