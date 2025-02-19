import { EventEmitter } from "../classes/event-emitter.class.js";
import { HamburgerEvent } from "..//types.js";
import { Component } from "../classes/component.class.js";

export class NavigationComponent extends Component {
    override name: string = "navigation";

    private event!: EventEmitter<HamburgerEvent>

    constructor(event: EventEmitter<HamburgerEvent>){
        super()

        this.event = event
    }

    override onReady(): void {
        this.runDropDownFunctubality()

        this.handlesOnScroll()

        this.runHmburgerOnClick()
    }

    private locateAndCloseAllOpenedDropDown(drops: NodeListOf<HTMLElement>){
        for (const linkElement of drops) {
            
            linkElement.classList.remove("dropped")

            const linkDropHolder = linkElement.querySelector(".drop-item-holder")
            
            if(!linkDropHolder) return

            linkDropHolder.classList.remove("open")
        }
    }

    private runDropDownFunctubality(){

        const allDropDownLinks = this.componentBody.querySelectorAll<HTMLElement>(".drop-down")
    
        document.addEventListener("click", () => this.locateAndCloseAllOpenedDropDown(allDropDownLinks))
    
        for (const linkElement of allDropDownLinks) {
            
            linkElement.onclick = (e: Event) => {
                e.stopPropagation()
    
                this.locateAndCloseAllOpenedDropDown(allDropDownLinks)
    
                linkElement.classList.toggle("dropped")
    
                const dropHolder = linkElement.querySelector(".drop-item-holder")
    
                if(!dropHolder) return
    
                dropHolder.classList.toggle("open")
    
                const sublist = dropHolder.querySelector("div")
    
                if(!sublist) return
    
                sublist.onclick  = (e) => {
                    sublist.querySelector(".drop-item-holder")?.classList.toggle("open")
                }
            }
        }
    }

    private handlesOnScroll (){
        const onScroll = () => {
            if(window.scrollY > 0){ // not at top
                
                 this.componentBody.classList.add("left-top")
            
            }else{// at top
    
                this.componentBody.classList.remove("left-top")
            }
        }
    
        document.addEventListener("scroll", onScroll)
    }
    
    private runHmburgerOnClick () {
        const hamburger = this.componentBody.querySelector<HTMLElement>(".hamburger")

        if(!hamburger) return

        hamburger.onclick = () => {
            this.event.emit("toggle")
        }
    }
}