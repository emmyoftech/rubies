import { Component } from "../classes/component.class.js";
export class NavigationComponent extends Component {
    constructor(event) {
        super();
        this.name = "navigation";
        this.event = event;
    }
    onReady() {
        this.runDropDownFunctubality();
        this.handlesOnScroll();
        this.runHmburgerOnClick();
    }
    locateAndCloseAllOpenedDropDown(drops) {
        for (const linkElement of drops) {
            linkElement.classList.remove("dropped");
            const linkDropHolder = linkElement.querySelector(".drop-item-holder");
            if (!linkDropHolder)
                return;
            linkDropHolder.classList.remove("open");
        }
    }
    runDropDownFunctubality() {
        const allDropDownLinks = this.componentBody.querySelectorAll(".drop-down");
        document.addEventListener("click", () => this.locateAndCloseAllOpenedDropDown(allDropDownLinks));
        for (const linkElement of allDropDownLinks) {
            linkElement.onclick = (e) => {
                e.stopPropagation();
                this.locateAndCloseAllOpenedDropDown(allDropDownLinks);
                linkElement.classList.toggle("dropped");
                const dropHolder = linkElement.querySelector(".drop-item-holder");
                if (!dropHolder)
                    return;
                dropHolder.classList.toggle("open");
                const sublist = dropHolder.querySelector("div");
                if (!sublist)
                    return;
                sublist.onclick = (e) => {
                    var _a;
                    (_a = sublist.querySelector(".drop-item-holder")) === null || _a === void 0 ? void 0 : _a.classList.toggle("open");
                };
            };
        }
    }
    handlesOnScroll() {
        const onScroll = () => {
            if (window.scrollY > 0) { // not at top
                this.componentBody.classList.add("left-top");
            }
            else { // at top
                this.componentBody.classList.remove("left-top");
            }
        };
        document.addEventListener("scroll", onScroll);
    }
    runHmburgerOnClick() {
        const hamburger = this.componentBody.querySelector(".hamburger");
        if (!hamburger)
            return;
        hamburger.onclick = () => {
            this.event.emit("toggle");
        };
    }
}
