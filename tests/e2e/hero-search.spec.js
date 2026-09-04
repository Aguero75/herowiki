import { expect, test } from "@playwright/test";

const heroResponse = {
  response: "success",
  results: [
    {
      id: "70",
      name: "Iron Man",
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg",
      },
      biography: {
        "full-name": "Tony Stark",
        "place-of-birth": "Long Island, New York",
        publisher: "Marvel Comics",
      },
      appearance: { gender: "Male", race: "Human" },
      work: { base: "Maria Stark Foundation", occupation: "Inventor" },
    },
  ],
};

test("searches for a hero and displays the result", async ({ page }) => {
  await page.route("**/api/hero?name=Iron%20Man", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify(heroResponse),
    });
  });

  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByPlaceholder(/e\.g\., Zeus/).pressSequentially("Iron Man");
  await page.getByRole("button", { name: "Search Hero" }).click();

  await expect(page.getByRole("heading", { name: "Iron Man" })).toBeVisible();
  await expect(page.getByText("Tony Stark")).toBeVisible();
  await expect(page.getByText("Inventor")).toBeVisible();
});

test("navigates to the guide and contact pages", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "Guide" }).click();
  await expect(page).toHaveURL(/\/guide$/);
  await page.waitForLoadState("networkidle");

  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/\/contact$/);
});
