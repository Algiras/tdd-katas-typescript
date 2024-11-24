import { GildedRose, Item } from "../../src/gildedRose/gildedRose";

describe("GildedRose", () => {
  it("should degrade normal items correctly before sell date", () => {
    const gildedRose = new GildedRose([new Item("Normal Item", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(4);
  });

  it("should degrade normal items correctly after sell date", () => {
    const gildedRose = new GildedRose([new Item("Normal Item", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(-1);
  });

  it("should not degrade quality below 0", () => {
    const gildedRose = new GildedRose([new Item("Normal Item", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should increase Aged Brie quality over time", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it("should not increase Aged Brie quality over 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should not change Sulfuras items", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(0);
  });

  it("should handle Backstage Passes correctly", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
    items[0].sellIn = 10;
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
    items[0].sellIn = 5;
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(26);
    items[0].sellIn = 0;
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should degrade Conjured items twice as fast", () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
