"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzBuzz_1 = require("../../src/fizzBuzz/fizzBuzz");
describe("FizzBuzz Function", () => {
    test('should return "Fizz" when the input is divisible by 3', () => {
        expect((0, fizzBuzz_1.fizzBuzz)(3)).toBe("Fizz");
        expect((0, fizzBuzz_1.fizzBuzz)(6)).toBe("Fizz");
    });
    test('should return "Buzz" when the input is divisible by 5', () => {
        expect((0, fizzBuzz_1.fizzBuzz)(5)).toBe("Buzz");
        expect((0, fizzBuzz_1.fizzBuzz)(10)).toBe("Buzz");
    });
    test('should return "FizzBuzz" when the input is divisible by both 3 and 5', () => {
        expect((0, fizzBuzz_1.fizzBuzz)(15)).toBe("FizzBuzz");
        expect((0, fizzBuzz_1.fizzBuzz)(30)).toBe("FizzBuzz");
    });
    test("should return the number as a string if not divisible by 3 or 5", () => {
        expect((0, fizzBuzz_1.fizzBuzz)(7)).toBe("7");
        expect((0, fizzBuzz_1.fizzBuzz)(8)).toBe("8");
    });
    test("should handle negative numbers correctly", () => {
        expect((0, fizzBuzz_1.fizzBuzz)(-3)).toBe("Fizz");
        expect((0, fizzBuzz_1.fizzBuzz)(-5)).toBe("Buzz");
        expect((0, fizzBuzz_1.fizzBuzz)(-15)).toBe("FizzBuzz");
        expect((0, fizzBuzz_1.fizzBuzz)(-7)).toBe("-7");
    });
    test("should handle invalid input gracefully", () => {
        expect(() => (0, fizzBuzz_1.fizzBuzz)(null)).toThrow("Invalid input");
        expect(() => (0, fizzBuzz_1.fizzBuzz)("string")).toThrow("Invalid input");
        expect(() => (0, fizzBuzz_1.fizzBuzz)(3.14)).toThrow("Invalid input");
    });
});
//# sourceMappingURL=fizzBuzz.spec.js.map