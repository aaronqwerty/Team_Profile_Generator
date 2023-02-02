const Intern = require("../library/Intern");

test("Can set school via constructor", () => {
  const testValue = "University of Sydney";
  const e = new Intern("Raikes", 1, "aaron@raikes.com.au", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Raikes", 1, "aaron@raikes.com.au", "University of Sydney");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "University of Sydney";
  const e = new Intern("Raikes", 1, "aaron@raikes.com.au", testValue);
  expect(e.getSchool()).toBe(testValue);
});