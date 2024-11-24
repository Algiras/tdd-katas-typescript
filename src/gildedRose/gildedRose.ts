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
    for (const item of this.items) {
      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          this.updateSulfuras(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case "Conjured Mana Cake":
          this.updateConjuredItem(item);
          break;
        default:
          this.updateNormalItem(item);
          break;
      }
    }
    return this.items;
  }

  private updateNormalItem(item: Item): void {
    item.sellIn -= 1;
    item.quality -= item.sellIn < 0 ? 2 : 1;
    item.quality = Math.max(0, item.quality);
  }

  private updateAgedBrie(item: Item): void {
    item.sellIn -= 1;
    item.quality += item.sellIn < 0 ? 2 : 1;
    item.quality = Math.min(50, item.quality);
  }

  private updateSulfuras(item: Item): void {
    // Legendary item; no changes
  }

  private updateBackstagePasses(item: Item): void {
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      item.quality = 0;
    } else if (item.sellIn < 5) {
      item.quality += 3;
    } else if (item.sellIn < 10) {
      item.quality += 2;
    } else {
      item.quality += 1;
    }
    item.quality = Math.min(50, item.quality);
  }

  private updateConjuredItem(item: Item): void {
    item.sellIn -= 1;
    item.quality -= item.sellIn < 0 ? 4 : 2;
    item.quality = Math.max(0, item.quality);
  }
}
