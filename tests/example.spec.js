import {test, expect} from "@playwright/test";

test("titulo encontrado", async ({page})=>{
  await page.goto('https://playwright.dev/');


  await expect(page).toHaveTitle(/Playwright/)
})