// TEST

const sum = require("../utils/suma");

describe("calculator", () => {
  test.each`
    firstValue | secondValue | expectedResult
    ${3}       | ${1}        | ${4}
    ${-4}      | ${1}        | ${-3}
    ${-4}      | ${-1}       | ${-5}
    ${5}       | ${-5}       | ${0}
  `(
    "$firstValue + $secondValue should return $expectedResult",
    ({ firstValue, secondValue, expectedResult }) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    }
  );
});
