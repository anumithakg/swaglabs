// src/pageUtils.ts
import { Page } from '@playwright/test';
import { LoginPage } from './src/page-objects/Login';
//import { InventoryPage } from './pages/InventoryPage'; // If you have other pages

// Utility function to initialize all page objects
export const initializePageObjects = (page: Page) => {
  return {
    loginPage: new LoginPage(page),     // Initializes the LoginPage object
    //inventoryPage: new InventoryPage(page),  // Initializes InventoryPage object if needed
  };
};
