import { Component } from "../classes/component.class.js";

export class FloatingSideNaviagtionComponent extends Component {
    override name: string = "floating-side-navigation";

    override onReady(): void {
        this.runDropDown()
    }

    runDropDown() {
        const allDropLinks = this.componentBody.querySelectorAll<HTMLElement>(".drop-down")   
        
        for (const linkElement of allDropLinks) {
            
            linkElement.onclick = (e) => {
                linkElement.querySelector("div")?.classList.toggle("open")

                linkElement.querySelector("span")?.classList.toggle("spin")
            } 
        
        }
    }
}