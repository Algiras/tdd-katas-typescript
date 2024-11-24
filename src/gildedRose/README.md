# GildedRose Kata Kata 

## Description

Implement a system to update the quality of items in a store based on specific rules:

- Core Properties:
  - Name: The item's name.
  - Sell-In: Days remaining to sell the item.
  - Quality: The value of the item (0 to 50, except for "Sulfuras").
- Update Rules:
  - Normal Items:
    - Quality decreases by 1 each day.
    - After the sell-by date (sellIn <= 0), quality decreases by 2.
  - Aged Brie:
     - Quality increases by 1 each day.
     - After the sell-by date, quality increases by 2.
     - Quality cannot exceed 50.
  - Sulfuras, Hand of Ragnaros:
    - Legendary item; sellIn and quality do not change.
    - Quality is always 80.
  - Backstage Passes:
    - Quality increases by 1 when sellIn > 10.
    - Increases by 2 when 6 <= sellIn <= 10.
    - Increases by 3 when sellIn <= 5.
    - Quality drops to 0 after the concert (sellIn < 0).
  - Conjured Items (Optional Extension):
    - Quality decreases by 2 each day.
    - After the sell-by date, quality decreases by 4.
  - Edge Cases:
    - Quality is never negative.
    - Quality never exceeds 50 (except for "Sulfuras").
    - System should handle invalid or unexpected input gracefully.

Initial code:
~~~typescript
/**
 * Represents an item in the GildedRose store.
 */
export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number,
  ) {}
}

/**
 * GildedRose class that updates the quality of items based on the given rules.
 */
export class GildedRose {
  constructor(public items: Item[] = []) {}

  updateQuality(): Item[] {
    return [];
  }
}
~~~

Initial tests:
~~~typescript
import { GildedRose, Item } from "../../src/gildedRose/gildedRose";

describe("GildedRose", () => {
    it("should be true", () => {
        expect(true).toBe(true);
    });
});
~~~