import { test } from "@playwright/test"
import { MainPage } from "../pages/mainPage"
import { ChampionsPage } from "../pages/championsPage";
import { CurrentChampionPage } from "../pages/currentChampionPage";
 

test("Вывод контер пиков по выбранному чемпиону", async ({ page }) => {

    const mainPage = new MainPage(page);
    const championPage = new ChampionsPage(page);
    const currentChampionPage = new CurrentChampionPage(page);

    await mainPage.goToMainPage();
    await mainPage.goToChampionsPage();
    await championPage.goToChampionByName('Syndra');
    await currentChampionPage.getStrongCounterPick();
    await currentChampionPage.getWeakCounterPick();
    



})