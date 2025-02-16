import { Component } from "../classes/component.class.js";
export class NavigationComponent extends Component {
    constructor() {
        super(...arguments);
        this.name = "navigation";
    }
    onReady() {
        runDropDownFunctubality(this.componentBody);
        handlesOnScroll(this.componentBody);
    }
}
function runDropDownFunctubality(parentElement) {
    const allDropDownLinks = parentElement.querySelectorAll(".drop-down");
    document.addEventListener("click", () => locateAndCloseAllOpenedDropDown(allDropDownLinks));
    for (const linkElement of allDropDownLinks) {
        linkElement.onclick = (e) => {
            e.stopPropagation();
            locateAndCloseAllOpenedDropDown(allDropDownLinks);
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
    function locateAndCloseAllOpenedDropDown(drops) {
        for (const linkElement of drops) {
            linkElement.classList.remove("dropped");
            const linkDropHolder = linkElement.querySelector(".drop-item-holder");
            if (!linkDropHolder)
                return;
            linkDropHolder.classList.remove("open");
        }
    }
}
function handlesOnScroll(parentElement) {
    function onScroll() {
        if (window.scrollY > 0) { // not at top
            parentElement.classList.add("left-top");
        }
        else { // at top
            parentElement.classList.remove("left-top");
        }
    }
    document.addEventListener("scroll", onScroll);
}
