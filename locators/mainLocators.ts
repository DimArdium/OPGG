import { Locator, Page } from "playwright-core";


export class MainLocators {

    readonly mainPage: Locator;
    readonly championPage: Locator;


    constructor(page: Page) { 
        this.mainPage = page.getByRole('link', { name: 'Home' });
        this.championPage = page.getByRole('link', { name: 'Champions', exact: true });

    }
     
}
