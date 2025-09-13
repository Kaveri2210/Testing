// @ts-check
import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('verify', async ({ page }) => {
  const aiArgs={page,test}
  await page.goto('https://www.saucedemo.com/');


  
await ai(`Log in as standard_user with password secret_sauce` ,aiArgs);
const text= await ai(`what is the price of 'Sauce Labs Backpack'`,aiArgs);
expect(text.replace(/\s+/g, '')).toEqual('$29.99');
await ai('Click the "Add to cart" button for "Sauce Labs Backpack".', aiArgs);
await ai('click on cart.',aiArgs);
await ai('click on checkout.',aiArgs);
await ai('Enter firstname, lastname, postal code .',aiArgs);
await ai('click on continue.',aiArgs);
await ai('click on finish.',aiArgs);
 // expect(text).toEqual('$29.99');
});
