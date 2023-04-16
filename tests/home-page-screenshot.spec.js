// @ts-check
const { test, expect } = require('@playwright/test');

test('correct title', async ({ page }) => {
    await page.goto('https://www.tylertech.com/');

    await page.screenshot({ path: './screenshots/tyler-technologies-home-page.png', fullPage: true });
});