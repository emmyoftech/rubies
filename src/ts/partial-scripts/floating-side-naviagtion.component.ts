import { EventEmitter } from "../classes/event-emitter.class.js";
import { Component } from "../classes/component.class.js";
import { HamburgerEvent } from "../types.js";

export class FloatingSideNaviagtionComponent extends Component {
    override name: string = "floating-side-navigation";

    private event!: EventEmitter<HamburgerEvent>

    constructor(event: EventEmitter<HamburgerEvent>){
        super()

        this.event = event
    }

    override onReady(): void {
        this.runDropDown()

        this.event.on("toggle", () => {
            this.componentBody.classList.toggle("open")
        })

        this.componentBody.querySelector(".close-btn")
        ?.addEventListener("click", () => {
            this.event.emit("toggle")
        })
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