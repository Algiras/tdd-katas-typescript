# FizzBuzz Kata

## Description
FizzBuzz is a classic programming challenge that tests a programmer's ability to implement basic control flow logic. 
The objective is to create a function that takes a single integer as input and returns a string based on the following rules:

- If the number is a multiple of 3, return "Fizz".
- If the number is a multiple of 5, return "Buzz".
- If the number is a multiple of both 3 and 5, return "FizzBuzz".
- If the number does not satisfy any of the above conditions, return the number itself as a string.
- Additionally, the function should validate the input to ensure it is an integer. If the input is not a number or not an integer, the function should throw an error.

Initial code:
~~~typescript
export function fizzBuzz(input: number): string {
  return "";
}
~~~

Initial tests: 
~~~typescript
import { fizzBuzz } from "../../src/fizzBuzz/fizzBuzz";

describe("FizzBuzz Function", () => {
      test("should be true", () => {
        expect(true).toBe(true);
      })
})
~~~