import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {CartPage} from '../pages/CartPage';

test('Login Test', async ({page}) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login('jerry_aj', 'password');
  await page.waitForTimeout(3000); // Wait for 3 seconds to observe the result

   const home = new HomePage(page);
   await home.addProductToCart('Iphone 6 32gb');
   await home.gotoCartPage();

   await page.waitForTimeout(3000); // Wait for 3 seconds to observe the result

   const cart = new CartPage(page);
   const isProductInCart = await cart.checkProductInCart('Iphone 6 32gb');
   expect(await isProductInCart).toBe(true);
});