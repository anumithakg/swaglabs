// src/page-objects/sauceLabsURL/NavigateToSauceLabs.ts
import { Page } from '@playwright/test';
import { urls } from '../urls/urls';

export class NavigateToSauceLabsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Method to navigate to the base URL
  async navigateToSauceLabsPage() {
    await this.page.goto(urls.baseUrl);  // Use the correct base URL from your urls file
  }
}
