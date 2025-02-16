var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Component {
    constructor() {
        this.partialHtmlBaseUrl = "/dist/partial-html/";
        this.partialCSSBaseUrl = "/dist/css/partial-styles/";
        this.loadComponentStyle = () => new Promise((res, rej) => {
            const styleLinkUrl = `${this.partialCSSBaseUrl}${this.name}.partial.css`, linkElement = this.MainDocument.createElement("link");
            linkElement.id = this.name;
            linkElement.rel = "stylesheet";
            linkElement.href = styleLinkUrl;
            linkElement.type = "text/css";
            linkElement.onload = () => res();
            linkElement.onerror = () => rej();
            document.head.appendChild(linkElement);
        });
    }
    initalize(document) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                this.MainDocument = document;
                // Load ComponentStyle
                yield this.loadComponentStyle();
                // Get component partial html dom
                yield this.looadComponentDOM();
                res();
            }));
        });
    }
    looadComponentDOM() {
        return __awaiter(this, void 0, void 0, function* () {
            const rawHtmlData = yield fetch(`${this.partialHtmlBaseUrl}${this.name}.component.html`), rawHtml = yield rawHtmlData.text();
            //@ts-ignore
            this.componentBody = document.querySelector(this.name);
            if (!this.componentBody)
                throw Error("failed to locate html DOM in Document");
            this.componentBody.innerHTML = rawHtml;
        });
    }
}
