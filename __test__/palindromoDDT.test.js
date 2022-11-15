// TEST

const palindromo = require("../utils/palindromo.js");

describe("check palindromo", () => {
  test.each`
    string    | expectedResult
    ${"Phil"} | ${"lihP"}
    ${"Fran"} | ${"narF"}
  `("$string should return $expectedResult", ({ string, expectedResult }) => {
    expect(palindromo(string)).toBe(expectedResult);
  });
});
