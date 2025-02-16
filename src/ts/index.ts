import { Component } from "./classes/component.class.js"
import { FeaturesPageComponent } from "./partial-scripts/features-page.component.js";
import { FloatingSideNaviagtionComponent } from "./partial-scripts/floating-side-naviagtion.component.js";
import { FooterComponent } from "./partial-scripts/footer.component.js";
import { LandIngPageComponent } from "./partial-scripts/landing-page.component.js"
import { NavigationComponent } from "./partial-scripts/navigation.component.js";
import { NewsLetterPageComponent } from "./partial-scripts/newsletter-page.component.js";
import { ServicesPageComponent } from "./partial-scripts/services-page.component.js";

const components: Component[] = [

    new FloatingSideNaviagtionComponent(),
    
    new NavigationComponent(),

    new LandIngPageComponent(),

    new ServicesPageComponent(),

    new FeaturesPageComponent(),

    new NewsLetterPageComponent(),

    new FooterComponent()
];

(async function() {
    for (const component of components) {

        await component.initalize(document)

        component.onReady()
    }
})()