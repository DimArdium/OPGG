import { Locator, Page } from "playwright-core";


export class ChampionsLocators {

    readonly championSearch: Locator;
    readonly goToChampionByName: (nameChampion: string) => Locator;


    constructor(page: Page) { 
        this.championSearch = page.locator('#championSearchAndFilter');
        this.goToChampionByName = (nameChampion: string) => page.getByRole('complementary').getByRole('link', { name: `${nameChampion}` });

    }
     
}
