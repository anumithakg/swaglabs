// src/fixtures/setupSauceLabs.ts
import { BrowserContext, Page, Browser } from '@playwright/test';
import { initializePageObjects } from '../../pageUtils';
import { NavigateToSauceLabsPage } from '../page-objects/NavigateToSaucelabs';

let sauceContext: BrowserContext;
let saucePage: Page;
let pages: ReturnType<typeof initializePageObjects>;

export const setupSauceLabs = async ({ browser }: { browser: Browser }) => {
  // Create a new browser context and page for each test
  sauceContext = await browser.newContext();
  saucePage = await sauceContext.newPage();

  // Initialize page objects (if you have a page object model)
  pages = initializePageObjects(saucePage);

  // Navigate to Sauce Labs base URL
  const navigateToSauceLabs = new NavigateToSauceLabsPage(saucePage);
  await navigateToSauceLabs.navigateToSauceLabsPage();

  // Return context, page, and page objects for use in tests
  return { sauceContext, saucePage, pages };
};
