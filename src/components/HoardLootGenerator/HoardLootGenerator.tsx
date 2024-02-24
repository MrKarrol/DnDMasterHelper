import { useState } from "react";
import "./HoardLootGenerator.css";
import "./data/IndividualTreasureData.json";
import individualTreasureData from "./data/IndividualTreasureData.json";

enum Danger {
  First = 0,
  Second = 1,
  Third = 2,
  Fourth = 3,
}

const generateInt = (minBound: number, maxBound: number) => {
  // const value = Math.floor(Math.random() * (maxBound - minBound) + minBound);
  // console.log(value)
  // return value
  return Math.floor(Math.random() * (maxBound - minBound + 1) + minBound);
};

const throwDices = (num: number, dice: number) => {
  console.log("starting roll", num, dice);
  return Array(num)
    .fill(0)
    .map(() => generateInt(1, dice))
    .reduce((acc, value) => {
      console.log(acc, value);
      return acc + value;
    }, 0);
};

const HoardLootGenerator = () => {
  const [danger, setDanger] = useState<Danger>(Danger.First);
  const [lootDescription, setLootDescription] = useState<string>();

  const onGenerate = () => {
    const lootTable = individualTreasureData[danger].lootTable;
    const dice100Result = generateInt(1, 100);

    const loot = lootTable.find((element) => {
      return dice100Result >= element.min && dice100Result <= element.max;
    })?.loot;

    let result: string = "";

    loot?.forEach((element) => {
      result +=
        throwDices(element.number, element.dice) * (element.multi || 1) +
        " " +
        element.type +
        ", ";
    });

    if (result.length) {
      result = result.substring(0, result.length - 2);
    }

    setLootDescription(result);
  };

  return (
    <div className="hoard-loot-generator">
      <div className="hoard-loot-generator_part">
        <select
          value={danger}
          onChange={(danger) => {
            setDanger(danger.target.value);
            setLootDescription("");
          }}
        >
          <option value={Danger.First}>Опасность 0-4</option>
          <option value={Danger.Second}>Опасность 5-10</option>
          <option value={Danger.Third}>Опасность 11-16</option>
          <option value={Danger.Fourth}>Опасность 17+</option>
        </select>
        <button className="hoard-loot-generator_button" onClick={onGenerate}>
          Генерировать
        </button>
      </div>
      <div className="hoard-loot-generator_part">Добыча: {lootDescription}</div>
    </div>
  );
};

export default HoardLootGenerator;
