import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todo.ly/');
  await page.locator('.HPHeaderLogin > a').click();
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail').fill('rribera9@gmail.com');
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').click();
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').fill('pruebas');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').click();
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').fill('prueba');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});