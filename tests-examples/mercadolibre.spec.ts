import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.bo/#from=homecom');
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
});