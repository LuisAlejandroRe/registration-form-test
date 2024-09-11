const { test, expect } = require("@playwright/test");

test.describe("Registration Form Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/index.html");
  });

  test("should show error when name is missing", async ({ page }) => {
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "Password1!");
    await page.fill('input[name="confirmPassword"]', "Password1!");
    await page.click('button[type="submit"]');
    const nameError = await page.locator("#nameError");
    await expect(nameError).toHaveText("Name is required.");
  });

  test("should show error for invalid email format", async ({ page }) => {
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "invalid-email");
    await page.fill('input[name="password"]', "Password1!");
    await page.fill('input[name="confirmPassword"]', "Password1!");
    await page.click('button[type="submit"]');
    const emailError = await page.locator("#emailError");
    await expect(emailError).toHaveText("Invalid email format.");
  });

  test("should show error when passwords do not match", async ({ page }) => {
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "Password1!");
    await page.fill('input[name="confirmPassword"]', "Different1!");
    await page.click('button[type="submit"]');
    const confirmPasswordError = await page.locator("#confirmPasswordError");
    await expect(confirmPasswordError).toHaveText("Passwords do not match.");
  });

  test("should redirect to dashboard on successful registration", async ({
    page,
  }) => {
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "Password1!");
    await page.fill('input[name="confirmPassword"]', "Password1!");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard\.html$/);
  });
});
