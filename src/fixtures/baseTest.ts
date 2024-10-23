// src/fixtures/baseTest.ts
import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../page-objects/Login';

type Fixtures = {
  login: LoginPage;
};

const test = baseTest.extend<Fixtures>({
  login: async ({ page }, use) => {
    const login = new LoginPage(page);
    await use(login);
  },
});

export { test };
