import { fizzBuzz } from "../../src/fizzBuzz/fizzBuzz";

describe("FizzBuzz Function", () => {
  test('should return "Fizz" when the input is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  test('should return "Buzz" when the input is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  test('should return "FizzBuzz" when the input is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  test("should return the number as a string if not divisible by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
    expect(fizzBuzz(8)).toBe("8");
  });

  test("should handle negative numbers correctly", () => {
    expect(fizzBuzz(-3)).toBe("Fizz");
    expect(fizzBuzz(-5)).toBe("Buzz");
    expect(fizzBuzz(-15)).toBe("FizzBuzz");
    expect(fizzBuzz(-7)).toBe("-7");
  });

  test("should handle invalid input gracefully", () => {
    expect(() => fizzBuzz(null as any)).toThrow("Invalid input");
    expect(() => fizzBuzz("string" as any)).toThrow("Invalid input");
    expect(() => fizzBuzz(3.14)).toThrow("Invalid input");
  });
});
