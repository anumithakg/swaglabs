// src/pages/Loginpage.ts
import { Locator, Page } from '@playwright/test';
import { urls } from '../urls/urls';

export class LoginPage {
    private page: Page;
    private sauceLabLogo:Locator;
    private usernamePlaceholder:Locator;
    private passwordPlaceholder:Locator;
    private loginButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.sauceLabLogo = this.page.locator("div.login_logo");
        this.usernamePlaceholder = this.page.locator('#user-name');
        this.passwordPlaceholder = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');

    }

    async goToLoginPage() {
        await this.page.goto(urls.baseUrl);  // Use the URL from the urls file
    }

    async getPageTitle() {
        return await this.sauceLabLogo.innerText();
    }

    async enterCredentials(username: string, password: string) {
         await this.usernamePlaceholder.fill(username);
         await this.passwordPlaceholder.fill(password);
    }

    async clickLoginButton() {
        return await this.loginButton.click();
    }
    
}
