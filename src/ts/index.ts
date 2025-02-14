import { LandIngPageComponent } from "/partial-scripts/landing-page.component"

(async function() {
    const load = new LandIngPageComponent()

    await load.initalize(document)

    load.onReady()
})