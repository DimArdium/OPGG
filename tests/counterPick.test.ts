import { test } from "@playwright/test"
import { MainPage } from "../pages/mainPage"
import { ChampionPage } from "../pages/championPage";

test("Вывод контер пиков по выбранному чемпиону", async ({ page }) => {

    const mainPage = new MainPage(page);
    const championPage = new ChampionPage(page);

    await mainPage.goToMainPage();
    await mainPage.goToChampionsPage();
    await championPage.goToChampionByName('Ahri');

})