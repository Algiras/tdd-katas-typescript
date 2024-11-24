import { Item, GildedRose } from '../../src/gildedRose/gildedRose';
import goldenTests from './gildedRoseGoldenTests.json';

export interface GildedRoseTestCase {
    name: string;
    initialSellIn: number;
    initialQuality: number;
    days: number;
    expectedSellIn: number;
    expectedQuality: number;
}

describe('GildedRose Golden Test Cases', () => {
    goldenTests.forEach((testCase: GildedRoseTestCase) => {
        test(`should correctly update ${testCase.name} over ${testCase.days} day(s)`, () => {
            const item = new Item(
                testCase.name,
                testCase.initialSellIn,
                testCase.initialQuality
            );
            const gildedRose = new GildedRose([item]);

            for (let day = 0; day < testCase.days; day++) {
                gildedRose.updateQuality();
            }

            expect(item.sellIn).toBe(testCase.expectedSellIn);
            expect(item.quality).toBe(testCase.expectedQuality);
        });
    });
});
