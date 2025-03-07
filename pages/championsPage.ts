import { Page } from "playwright-core";
import { ChampionsLocators } from "../locators/championsPageLocators";
import type { ChampionsName } from "../types/mainLists.type";

export class ChampionsPage {

    championsLocators: ChampionsLocators;

    constructor(page: Page) {
        this.championsLocators = new ChampionsLocators(page);

    }

    public async goToChampionByName(name: ChampionsName) {
        await this.championsLocators.goToChampionByName(name).click();
    }

}