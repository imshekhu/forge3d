import { expect, test } from "@playwright/test";

test("renders the complete Forge3D journey", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Forge3D/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Your idea, made real/i }),
  ).toBeVisible();
  await expect(page.getByText("Now taking projects across the GTA")).toBeVisible();
  await expect(page.locator(".service-card")).toHaveCount(4);
  await expect(page.locator(".concept-card")).toHaveCount(3);
  await expect(page.locator(".process-list li")).toHaveCount(4);
  await expect(page.locator(".faq-list details")).toHaveCount(6);
  await expect(page.getByRole("form")).toBeVisible();
});

test("supports keyboard navigation to main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
});

test("opens and closes the mobile menu", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile-only interaction");
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Open menu" });
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();

  await page.getByRole("link", { name: "Process" }).last().click();
  await expect(page).toHaveURL(/#process$/);
  await expect(menuButton).toBeVisible();
});

test("has no horizontal overflow at supported viewport sizes", async ({ page }) => {
  await page.goto("/");
  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
});

test("shows a clear response when quote delivery is not configured", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("mobile"), "Run form submission once");
  await page.goto("/#quote");

  await page.getByLabel("Name *").fill("Test Customer");
  await page.getByLabel("Email *").fill("test@example.com");
  await page.getByLabel("GTA location *").fill("Toronto");
  await page.getByLabel("What can we help with? *").selectOption("ai-model");
  await page
    .getByLabel("Project details *")
    .fill("A detailed automated test request for a small custom desk model.");
  await page
    .getByLabel(/I agree that Forge3D/)
    .check();
  await page.getByRole("button", { name: "Send project request" }).click();

  await expect(
    page.getByText(/Quote delivery is not configured yet/),
  ).toBeVisible();
});
