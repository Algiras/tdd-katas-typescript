import { fizzBuzz } from '../../src/fizzBuzz/fizzBuzz';
import goldenTests from './fizzBuzzGoldenTests.json';

export interface FizzBuzzTestCase {
    input: number;
    expected: string;
}

describe('FizzBuzz Golden Test Cases', () => {
    goldenTests.forEach((testCase: FizzBuzzTestCase) => {
        test(`should return "${testCase.expected}" for input ${testCase.input}`, () => {
            expect(fizzBuzz(testCase.input)).toBe(testCase.expected);
        });
    });
});