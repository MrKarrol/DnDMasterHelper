import { CoinLootType, DiceType, LootTables } from "../../../shared";

const individualTreasureData: LootTables = [
  {
    min: 0,
    max: 4,
    lootTable: [
      {
        min: 1,
        max: 30,
        loot: [
          {
            type: CoinLootType.Copper,
            num: 5,
            dice: DiceType.d6,
          },
        ],
      },
      {
        min: 31,
        max: 60,
        loot: [
          {
            type: CoinLootType.Silver,
            num: 4,
            dice: DiceType.d6,
          },
        ],
      },
      {
        min: 61,
        max: 70,
        loot: [
          {
            type: CoinLootType.Electrum,
            num: 3,
            dice: DiceType.d6,
          },
        ],
      },
      {
        min: 71,
        max: 95,
        loot: [
          {
            type: CoinLootType.Gold,
            num: 3,
            dice: DiceType.d6,
          },
        ],
      },
      {
        min: 96,
        max: 100,
        loot: [
          {
            type: CoinLootType.Platinum,
            num: 1,
            dice: DiceType.d6,
          },
        ],
      },
    ],
  },
  {
    min: 5,
    max: 10,
    lootTable: [
      {
        min: 1,
        max: 30,
        loot: [
          {
            type: CoinLootType.Copper,
            num: 4,
            dice: DiceType.d6,
            multi: 100,
          },
          {
            type: CoinLootType.Electrum,
            num: 1,
            dice: DiceType.d6,
            multi: 10,
          },
        ],
      },
      {
        min: 31,
        max: 60,
        loot: [
          {
            type: CoinLootType.Silver,
            num: 6,
            dice: DiceType.d6,
            multi: 10,
          },
          {
            type: CoinLootType.Gold,
            num: 2,
            dice: DiceType.d6,
            multi: 10,
          },
        ],
      },
      {
        min: 61,
        max: 70,
        loot: [
          {
            type: CoinLootType.Electrum,
            num: 3,
            dice: DiceType.d6,
            multi: 10,
          },
          {
            type: CoinLootType.Gold,
            num: 2,
            dice: DiceType.d6,
            multi: 10,
          },
        ],
      },
      {
        min: 71,
        max: 95,
        loot: [
          {
            type: CoinLootType.Gold,
            num: 4,
            dice: DiceType.d6,
            multi: 10,
          },
        ],
      },
      {
        min: 96,
        max: 100,
        loot: [
          {
            type: CoinLootType.Gold,
            num: 2,
            dice: DiceType.d6,
            multi: 10,
          },
          {
            type: CoinLootType.Platinum,
            num: 3,
            dice: DiceType.d6,
          },
        ],
      },
    ],
  },
  {
    min: 11,
    max: 16,
    lootTable: [
      {
        min: 1,
        max: 20,
        loot: [
          {
            type: CoinLootType.Silver,
            num: 4,
            dice: DiceType.d6,
            multi: 100,
          },
          {
            type: CoinLootType.Gold,
            num: 1,
            dice: DiceType.d6,
            multi: 100,
          },
        ],
      },
      {
        min: 21,
        max: 35,
        loot: [
          {
            type: CoinLootType.Electrum,
            num: 1,
            dice: DiceType.d6,
            multi: 100,
          },
          {
            type: CoinLootType.Gold,
            num: 1,
            dice: DiceType.d6,
            multi: 100,
          },
        ],
      },
      {
        min: 36,
        max: 75,
        loot: [
          {
            type: CoinLootType.Gold,
            num: 2,
            dice: DiceType.d6,
            multi: 100,
          },
          {
            type: CoinLootType.Platinum,
            num: 1,
            dice: DiceType.d6,
            multi: 10,
          },
        ],
      },
      {
        min: 76,
        max: 100,
        loot: [
          {
            type: CoinLootType.Gold,
            num: 2,
            dice: DiceType.d6,
            multi: 100,
          },
          {
            type: CoinLootType.Platinum,
            num: 2,
            dice: DiceType.d6,
            multi: 10,
          },
        ],
      },
    ],
  },
  {
    min: 17,
    max: 30,
    lootTable: [
      {
        min: 1,
        max: 15,
        loot: [
          {
            type: CoinLootType.Electrum,
            num: 2,
            dice: DiceType.d6,
            multi: 1000,
          },
          {
            type: CoinLootType.Gold,
            num: 8,
            dice: DiceType.d6,
            multi: 100,
          },
        ],
      },
      {
        min: 16,
        max: 55,
        loot: [
          {
            type: CoinLootType.Gold,
            num: 1,
            dice: DiceType.d6,
            multi: 1000,
          },
          {
            type: CoinLootType.Platinum,
            num: 1,
            dice: DiceType.d6,
            multi: 100,
          },
        ],
      },
      {
        min: 56,
        max: 100,
        loot: [
          {
            type: CoinLootType.Gold,
            num: 1,
            dice: DiceType.d6,
            multi: 1000,
          },
          {
            type: CoinLootType.Platinum,
            num: 2,
            dice: DiceType.d6,
            multi: 100,
          },
        ],
      },
    ],
  },
];

export default individualTreasureData;
