// @ts-check
const { test, expect } = require('@playwright/test');
const playwright = require('@playwright/test')
const { webkit } = require('@playwright/test');;

test('correct twitter link', async () => {
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.tylertech.com/');

    const pagePromise = context.waitForEvent('page');

    await page.getByRole('link', { name: 'Twitter' }).click()

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL('https://twitter.com/tylertech')
});