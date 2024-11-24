# FooBarBazz Problem

## Description
Implement a function that takes a single integer as input and returns a string based on the following rules:

- Divisibility Rules:
  - If the number is divisible by 3, return "Foo".
  - If the number is divisible by 5, return "Bar".
  - If the number is divisible by 7, return "Bazz".
  - For multiples, concatenate the strings (e.g., 15 returns "FooBar").
- Edge Cases:
  - 0 is a special case and returns "FooBarBazz".
  - Negative numbers are handled like positive numbers (e.g., -3 returns "Foo").
  - Invalid inputs (strings, floats, null, etc.) should be handled gracefully.
- Default Case:
  - If none of the above conditions are met, return the number as a string.