import { Locator, Page } from "playwright-core";


export class ChampionPageLocators {

    readonly championSearch: Locator;
    readonly goToChampionByName: (name: string) => Locator;


    constructor(page: Page) { 
        this.championSearch = page.locator('#championSearchAndFilter');
        this.goToChampionByName = (name: string) => page.getByRole('complementary').getByRole('link', { name: `${name}` });

    }
     
}
