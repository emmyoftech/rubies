export abstract class Component {
    private ifProd = isNaN(parseInt(window.location.hostname))
        
    private partialHtmlBaseUrl = "/assets/partial-html/"

    private partialCSSBaseUrl = "/css/partial-styles/"

    abstract name: string

    MainDocument!: Document

    componentBody!: HTMLElement

    abstract onReady(): void

    async initalize (document: Document) {

        return new Promise<void>(async (res, rej) => {
            this.MainDocument = document

            // Load ComponentStyle
            await this.loadComponentStyle()

            // Get component partial html dom
            await this.looadComponentDOM()

            res()
        })
    
    }

    private loadComponentStyle = () => new Promise<void>((res, rej) => {
        const styleLinkUrl = `${this.ifProd ? '' : '/dist'}${this.partialCSSBaseUrl}${this.name}.partial.css`,

        linkElement = this.MainDocument.createElement("link")

        linkElement.id = this.name

        linkElement.rel = "stylesheet"

        linkElement.href = styleLinkUrl

        linkElement.type = "text/css"

        linkElement.onload = () => res()

        linkElement.onerror = () => rej()

        document.head.appendChild(linkElement)
    })

    private async looadComponentDOM () {
        const rawHtmlData = await fetch(`${this.ifProd ? '' : '/dist'}${this.partialHtmlBaseUrl}${this.name}.component.html`),

        rawHtml = await rawHtmlData.text() 

        //@ts-ignore
        this.componentBody = document.querySelector(this.name)

        if(!this.componentBody) throw Error("failed to locate html DOM in Document")

        this.componentBody.innerHTML = rawHtml
    }
}