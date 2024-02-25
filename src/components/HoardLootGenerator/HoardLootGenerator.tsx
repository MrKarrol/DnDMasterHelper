import { useState } from "react";
import "./HoardLootGenerator.css";
import individualTreasureData from "./data/IndividualTreasureData.tsx";
import { useNavigate } from "react-router-dom";
import { Danger, Select, generateInt, throwDices } from "../../shared";

const HoardLootGenerator = () => {
  const nav = useNavigate();

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
        throwDices(element.num, element.dice) * (element.multi || 1) +
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
        <p>Генератор лута с мобов</p>
      <div className="hoard-loot-generator_part">
        <Select
          onChange={(danger) => {
            setDanger(danger);
            setLootDescription("");
          }}
        />
        <button className="hoard-loot-generator_button" onClick={onGenerate}>
          Генерировать
        </button>
        <button onClick={() => nav("/")}>На главную</button>
      </div>
      <div className="hoard-loot-generator_part">Добыча: {lootDescription}</div>
    </div>
  );
};

export default HoardLootGenerator;
