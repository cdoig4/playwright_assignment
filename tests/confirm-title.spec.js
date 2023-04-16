// @ts-check
const { test, expect } = require('@playwright/test');

test('correct title', async ({ page }) => {
    await page.goto('https://www.tylertech.com/');

    await expect(page).toHaveTitle(/Tyler Technologies/)
});