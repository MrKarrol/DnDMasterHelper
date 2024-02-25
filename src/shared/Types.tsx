export enum Danger {
  First = 0,
  Second = 1,
  Third = 2,
  Fourth = 3,
}

export enum CoinLootType {
  Copper = "мед. м",
  Silver = "сереб. м",
  Electrum = "электр. м",
  Gold = "золот. м",
  Platinum = "плат. м",
}

export enum DiceType {
    d6 = 6,
    d100 = 100,
}

export interface CoinLoot {
  type: CoinLootType;
  num: number; // Num of dice throws
  dice: DiceType; // Dice type
  multi?: number; // Multiply for result
}

export interface LootTableRow {
    min: number; // Min dice range
    max: number; // Max dice range
    loot: CoinLoot[];
}

export interface LootTablePart extends Array<LootTableRow>{}

export interface LootTable {
    min: number; // Min danger level
    max: number; // Max danger level
    lootTable: LootTablePart; // Loot table for above danger levels
}

export interface LootTables extends Array<LootTable>{}