import { Locator, Page } from "playwright-core";


export class CurrentChampionLocators{
    readonly strongAgainstChampions: (pick: number) => Locator;


    constructor(page: Page){

        this.strongAgainstChampions = (pick: number) => page.locator(`//ul[@class="flex w-full justify-around py-3 text-xs"]/li[${pick}]`).nth(1);
    }


}