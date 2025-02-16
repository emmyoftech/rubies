var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LandIngPageComponent } from "./partial-scripts/landing-page.component.js";
import { NavigationComponent } from "./partial-scripts/navigation.component.js";
import { ServicesPageComponent } from "./partial-scripts/services-page.component.js";
const components = [
    new LandIngPageComponent(),
    new NavigationComponent(),
    new ServicesPageComponent()
];
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        for (const component of components) {
            yield component.initalize(document);
            component.onReady();
        }
    });
})();
