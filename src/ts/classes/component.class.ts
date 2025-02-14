export abstract class Component {
    private partialHtmlBaseUrl = "/dist/partial-html/"

    private partialCSSBaseUrl = "/dist/css/partial-styles/"

    abstract name: string

    MainDocument!: Document 

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
        const styleLinkUrl = `${this.partialCSSBaseUrl}${this.name}.css.map`,

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
        const rawHtmlData = await fetch(`${this.partialHtmlBaseUrl}${this.name}.component.html`),

        rawHtml = await rawHtmlData.text() 

        const componentElementInDocument = document.querySelector(this.name)

        if(!componentElementInDocument) throw Error("failed to locate html DOM in Document")

        componentElementInDocument.innerHTML = rawHtml
    }
}