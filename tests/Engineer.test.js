const Engineer = require("../library/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "aaronqwerty";
  const e = new Engineer("Raikes", 1, "aaron@raikes.com.au", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Raikes", 1, "aaron@raikes.com.au", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "aaronqwerty";
  const e = new Engineer("Raikes", 1, "aaron@raikes.com.au", testValue);
  expect(e.getGithub()).toBe(testValue);
});