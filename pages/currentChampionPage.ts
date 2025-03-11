import { Page } from "playwright-core";
import { CurrentChampionLocators } from "../locators/currentChampionPageLocators";


export class CurrentChampionPage {

    currentChampionLocators: CurrentChampionLocators;

    constructor(page: Page) {
        this.currentChampionLocators = new CurrentChampionLocators(page);

    }

    public async getStrongCounterPick() {

        let champCount = 0;
        let championName;
        let championWinRate;
        let countGames;
        console.log("Против кого сильнее:");
        while (champCount++ < 5) {
            championName = await this.currentChampionLocators.strongAgainstChampions(champCount).evaluate((node) => {
                return (node.querySelector('img') as HTMLImageElement).getAttribute('alt');

            });
            championWinRate = await this.currentChampionLocators.strongAgainstChampionsWinRate(champCount).textContent();
            countGames = await this.currentChampionLocators.strongAgainstChampionsCountGames(champCount).textContent();
            

            console.log(`${championName}: ${championWinRate} за ${countGames} игр`);
        }
    }

    public async getWeakCounterPick() {

        let champCount = 0;
        let championName;
        let championWinRate;
        let countGames;
        console.log("Против кого слабее:");
        while (champCount++ < 5) {
            championName = await this.currentChampionLocators.weakAgainstChampions(champCount).evaluate((node) => {
                return (node.querySelector('img') as HTMLImageElement).getAttribute('alt');

            });
            championWinRate = await this.currentChampionLocators.weakAgainstChampionsWinRate(champCount).textContent();
            countGames = await this.currentChampionLocators.weakAgainstChampionsCountGames(champCount).textContent();
            console.log(`${championName}: ${championWinRate} за ${countGames} игр`);
        }
    }
}
