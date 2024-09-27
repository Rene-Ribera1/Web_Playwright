import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test('Login', async ({ page }) => {
  await page.goto('https://www.saucedodemo.com');
 
  const login = new LoginPage (page)
  await login.loginWithCredentials('standard_user', 'secret_sauce')
  await login.checkSuccessfulLogin()

});