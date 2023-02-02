const Manager = require("../library/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = "0430146760";
  const e = new Manager("Raikes", 1, "aaron@raikes.com.au", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Raikes", 1, "aaron@raikes.com.au", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = "0430146760";
  const e = new Manager("Raikes", 1, "aaron@raikes.com.au", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});