// src/tests/loginTest.spec.ts
import { test, expect, Browser, Page } from '@playwright/test';
import { setupSauceLabs } from '../fixtures/setupSauceLabs';
import { LoginPage } from '../page-objects/Login';
import { credentials } from '../user credentials/credentials';
import { urls } from '../urls/urls';

let page: Page;
let loginPage: LoginPage;

test.describe('Sauce Labs Login Tests', () => {
  test.beforeAll(async ({ browser }) => {
    // Use the setupSauceLabs fixture to navigate to the base URL
    const { saucePage } = await setupSauceLabs({ browser });
    page = saucePage;

    // Initialize the login page object
    loginPage = new LoginPage(page);
  });

  test('Login with standard user', async () => {
    await loginPage.getPageTitle();
    // Enter credentials and login
    await loginPage.enterCredentials(credentials.standardUser.username, credentials.standardUser.password);
    await loginPage.clickLoginButton();

    // Assert that login was successful (checking URL as an example)
    expect(page.url()).toBe(urls.inventoryUrl);
  });

  
});
