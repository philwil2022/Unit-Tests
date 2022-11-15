// TEST

const mayuscula = require("../utils/esmayuscula.js");

describe("check mayuscula", () => {
  test.each`
    sentence             | expectedResult
    ${"HELLO"}           | ${true}
    ${"Hello"}           | ${false}
    ${"TESTING ONE TWO"} | ${true}
  `(
    "$firstValue should return $expectedResult",
    ({ sentence, expectedResult }) => {
      expect(mayuscula(sentence)).toBe(expectedResult);
    }
  );
});
