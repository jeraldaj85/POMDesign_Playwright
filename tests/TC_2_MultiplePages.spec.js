const {test, expect, chromium} = require('@playwright/test');

test('Multiple Pages Test', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');


    const pagePromsise=context.waitForEvent('page')
    await  page1.locator('//div[@class="orangehrm-copyright-wrapper"]//a').click();

    const newPage = await pagePromsise;
    await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');
    
    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);
    await browser.close();


})