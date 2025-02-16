import { Component } from "./classes/component.class.js"
import { LandIngPageComponent } from "./partial-scripts/landing-page.component.js"
import { NavigationComponent } from "./partial-scripts/navigation.component.js";
import { ServicesPageComponent } from "./partial-scripts/services-page.component.js";

const components: Component[] = [
    new LandIngPageComponent(),

    new NavigationComponent(),

    new ServicesPageComponent()
];

(async function() {
    for (const component of components) {

        await component.initalize(document)

        component.onReady()
    }
})()