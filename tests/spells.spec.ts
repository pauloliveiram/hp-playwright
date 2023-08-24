import { test, expect } from "@playwright/test";

test("Validar o endpoint GET /spells", async ({ request }) => {
  const response = await request.get("/api/spells");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody[0].id).toBe("string");
  expect(typeof responseBody[0].name).toBe("string");
  expect(typeof responseBody[0].description).toBe("string");
});
