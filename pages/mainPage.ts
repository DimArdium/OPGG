import { Page } from "playwright-core";
import { MainLocators } from "../locators/mainLocators";
import { expect } from "playwright/test";

export class MainPage {


    mainLocators: MainLocators;

    constructor(private page: Page) {

        this.mainLocators = new MainLocators(page);
    }

    public async goToMainPage() {
        await this.page.goto("");
        await expect(this.mainLocators.mainPage, "ОПГГ открылся").toBeVisible();
    }

    public async goToChampionsPage() {
        await this.mainLocators.championPage.click();
    }
}