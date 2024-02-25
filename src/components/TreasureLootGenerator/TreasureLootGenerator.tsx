import { useNavigate } from "react-router-dom";
import "./TreasureLootGenerator.css";
import { useState } from "react";
import { Danger, Select, generateInt } from "../../shared";

const TreasureLootGenerator = () => {
  const nav = useNavigate();

  const [danger, setDanger] = useState<Danger>(Danger.First);
  const [lootDescription, setLootDescription] = useState<string>();

  const onGenerate = () => {
    let result: string = "";

    if (result.length) {
      result = result.substring(0, result.length - 2);
    }

    setLootDescription(result);
  };

  return (
    <div className="treasure-loot-generator">
      <p>Генератор сокровищницы</p>
      <div className="treasure-loot-generator_part">
        <Select
          onChange={(danger) => {
            setDanger(danger);
            setLootDescription("");
          }}
        />
        <button className="treasure-loot-generator_button" onClick={onGenerate}>
          Генерировать
        </button>
        <button onClick={() => nav("/")}>На главную</button>
      </div>
    </div>
  );
};

export default TreasureLootGenerator;
