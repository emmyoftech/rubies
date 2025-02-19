var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventEmitter } from "./classes/event-emitter.class.js";
import { FeaturesPageComponent } from "./partial-scripts/features-page.component.js";
import { FloatingSideNaviagtionComponent } from "./partial-scripts/floating-side-naviagtion.component.js";
import { FooterComponent } from "./partial-scripts/footer.component.js";
import { LandIngPageComponent } from "./partial-scripts/landing-page.component.js";
import { NavigationComponent } from "./partial-scripts/navigation.component.js";
import { NewsLetterPageComponent } from "./partial-scripts/newsletter-page.component.js";
import { ServicesPageComponent } from "./partial-scripts/services-page.component.js";
const eventEmitter = new EventEmitter();
const components = [
    new FloatingSideNaviagtionComponent(eventEmitter),
    new NavigationComponent(eventEmitter),
    new LandIngPageComponent(),
    new ServicesPageComponent(),
    new FeaturesPageComponent(),
    new NewsLetterPageComponent(),
    new FooterComponent()
];
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        for (const component of components) {
            yield component.initalize(document);
            component.onReady();
        }
    });
})();
