const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://ludmil7703-exam-prep.onrender.com/boardgames');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  