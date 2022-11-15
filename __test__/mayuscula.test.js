const isUpperCase = require("../utils/esmayuscula");

test("The string HELLO should return true", () => {
  const result = isUpperCase("HELLO");
  expect(result).toBe(true);
});

test("The string hello should return true", () => {
  const result = isUpperCase("hello");
  expect(result).toBe(false);
});
