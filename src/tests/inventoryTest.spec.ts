// src/tests/inventoryTest.spec.ts
import { expect } from 'playwright/test';
import { test } from '../fixtures/baseTest';
import { urls } from '../urls/urls'; // Import the URLs

test('should navigate to cart page', async ({ page }) => {
  await page.goto(urls.baseUrl);  // Use the cart URL
  // const cartTitle = await page.locator('.title').innerText();
  // expect(cartTitle).toBe('YOUR CART');
});
