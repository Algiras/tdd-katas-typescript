/**
 * Returns "Fizz", "Buzz", "FizzBuzz", or the number as a string based on divisibility rules.
 * @param input A single integer.
 * @returns A string according to the FizzBuzz rules.
 */
export function fizzBuzz(input: number): string {
  if (typeof input !== "number" || !Number.isInteger(input)) {
    throw new Error("Invalid input: Input must be an integer.");
  }

  let result = "";

  if (input % 3 === 0) result += "Fizz";
  if (input % 5 === 0) result += "Buzz";

  return result || input.toString();
}
