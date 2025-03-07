import { Page } from "playwright-core";
import { MainPageLocators } from "../locators/mainLocators";
import { expect } from "playwright/test";

export class MainPage {

    page: Page;
    mainPageLocators: MainPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.mainPageLocators = new MainPageLocators(page);
    }

    public async goToMainPage() {
        await this.page.goto("");
        await expect(this.mainPageLocators.mainPage, "ОПГГ открылся").toBeVisible();
    }

    public async goToChampionsPage() {
        await this.mainPageLocators.championPage.click();
    }
}