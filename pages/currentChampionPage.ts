import { Page } from "playwright-core";
import { CurrentChampionLocators } from "../Locators/currentChampionPageLocators";


export class CurrentChampionPage {

    currentChampionLocators: CurrentChampionLocators;

    constructor(page: Page) {
        this.currentChampionLocators = new CurrentChampionLocators(page);

    }

    public async getCounterPick() {

        let champCount = 0;
        let championName;
        while (champCount++ < 5) {
            championName = await this.currentChampionLocators.strongAgainstChampions(champCount).evaluate((node) => {
                return (node.querySelector('img') as HTMLImageElement).getAttribute('alt');

            });
            console.log(championName);
        }
    }
}
