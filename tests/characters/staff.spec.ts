import { test, expect } from "@playwright/test";

test("Validar o endpoint GET /characters/staff", async ({ request }) => {
  const response = await request.get("/api/characters/staff");
  const responseBody = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(typeof responseBody[0].id).toBe("string");
  expect(typeof responseBody[0].name).toBe("string");
  expect(Array.isArray(responseBody[0].alternate_names)).toBe(true);
  expect(typeof responseBody[0].species).toBe("string");
  expect(typeof responseBody[0].gender).toBe("string");
  expect(typeof responseBody[0].house).toBe("string");
  expect(typeof responseBody[0].dateOfBirth).toBe("string");
  expect(typeof responseBody[0].yearOfBirth).toBe("number");
  expect(typeof responseBody[0].wizard).toBe("boolean");
  expect(typeof responseBody[0].ancestry).toBe("string");
  expect(typeof responseBody[0].eyeColour).toBe("string");
  expect(typeof responseBody[0].hairColour).toBe("string");
  expect(typeof responseBody[0].wand.wood).toBe("string");
  expect(typeof responseBody[0].wand.core).toBe("string");
  expect(typeof responseBody[0].wand.length).toBe("number");
  expect(typeof responseBody[0].patronus).toBe("string");
  expect(typeof responseBody[0].hogwartsStudent).toBe("boolean");
  expect(typeof responseBody[0].hogwartsStaff).toBe("boolean");
  expect(typeof responseBody[0].actor).toBe("string");
  expect(Array.isArray(responseBody[0].alternate_actors)).toBe(true);
  expect(typeof responseBody[0].alive).toBe("boolean");
  expect(typeof responseBody[0].image).toBe("string");
});
