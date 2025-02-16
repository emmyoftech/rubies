import { Component } from "../classes/component.class.js";

export class NavigationComponent extends Component{
    override name: string = "navigation";

    override onReady(): void {
        runDropDownFunctubality(this.componentBody)

        handlesOnScroll(this.componentBody)
    }
}

function runDropDownFunctubality(parentElement: HTMLElement){

    const allDropDownLinks = parentElement.querySelectorAll<HTMLElement>(".drop-down")

    document.addEventListener("click", () => locateAndCloseAllOpenedDropDown(allDropDownLinks))

    for (const linkElement of allDropDownLinks) {
        
        linkElement.onclick = (e: Event) => {
            e.stopPropagation()

            locateAndCloseAllOpenedDropDown(allDropDownLinks)

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

    function locateAndCloseAllOpenedDropDown(drops: NodeListOf<HTMLElement>){
        for (const linkElement of drops) {
            
            linkElement.classList.remove("dropped")

            const linkDropHolder = linkElement.querySelector(".drop-item-holder")
            
            if(!linkDropHolder) return

            linkDropHolder.classList.remove("open")
        }
    }
}

function handlesOnScroll (parentElement: HTMLElement){
    function onScroll(){
        if(window.scrollY > 0){ // not at top
            
            parentElement.classList.add("left-top")
        
        }else{// at top

            parentElement.classList.remove("left-top")

        }
    }

    document.addEventListener("scroll", onScroll)
}