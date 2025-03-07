import { Page } from "playwright-core";
import { ChampionPageLocators } from "../locators/championPageLocators";
import type { ChampionsName } from "../types/mainLists.type";

export class ChampionPage {

    championPageLocators: ChampionPageLocators;

    constructor(page: Page) {
        this.championPageLocators = new ChampionPageLocators(page);

    }

    public async goToChampionByName(name: ChampionsName) {
        await this.championPageLocators.goToChampionByName(name).click();
    }

}