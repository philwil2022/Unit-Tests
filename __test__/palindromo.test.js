const palindromo = require("../utils/palindromo");

test("palindromo de fran", () => {
  const result = palindromo("fran");
  expect(result).toBe("narf");
});

test("palindromo de phil", () => {
  const result = palindromo("phil");
  expect(result).toBe("lihp");
});
