import { Locator, Page } from "playwright-core";


export class CurrentChampionLocators{
    readonly strongAgainstChampions: (pick: number) => Locator;
    readonly strongAgainstChampionsWinRate: (pick: number) => Locator;
    readonly strongAgainstChampionsCountGames : (pick: number) => Locator;
    readonly weakAgainstChampions: (pick: number) => Locator;
    readonly weakAgainstChampionsWinRate: (pick: number) => Locator;
    readonly weakAgainstChampionsCountGames : (pick: number) => Locator;

    constructor(page: Page){

        this.strongAgainstChampions = (pick: number) => page.locator(`//ul[@class="flex w-full justify-around py-3 text-xs"]/li[${pick}]`).nth(1);
        this.strongAgainstChampionsWinRate = (pick: number) => page.locator(`//ul[@class="flex w-full justify-around py-3 text-xs"]/li[${pick}]/a[@class="flex w-[60px] flex-col items-center gap-2"]/strong`).nth(1);
        this.strongAgainstChampionsCountGames = (pick: number) => page.locator(`//ul[@class="flex w-full justify-around py-3 text-xs"]/li[${pick}]/a[@class="flex w-[60px] flex-col items-center gap-2"]/span[2]/span[1]`).nth(1);
        this.weakAgainstChampions = (pick: number) => page.locator(`//ul[@class="flex w-full justify-around py-3 text-xs"]/li[${pick}]`).nth(0);
        this.weakAgainstChampionsWinRate = (pick: number) => page.locator(`//ul[@class="flex w-full justify-around py-3 text-xs"]/li[${pick}]/a[@class="flex w-[60px] flex-col items-center gap-2"]/strong`).nth(0);
        this.weakAgainstChampionsCountGames = (pick: number) => page.locator(`//ul[@class="flex w-full justify-around py-3 text-xs"]/li[${pick}]/a[@class="flex w-[60px] flex-col items-center gap-2"]/span[2]/span[1]`).nth(0);
    }

    


}