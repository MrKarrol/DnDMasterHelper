import { useNavigate } from "react-router-dom";
import "./TreasureLootGenerator.css";

const TreasureLootGenerator = () => {
  const nav = useNavigate();

  return (
    <div className="treasure-loot-generator">
      <div className="treasure-loot-generator__part">
        <button onClick={() => nav("/")}>На главную</button>
      </div>
    </div>
  );
};

export default TreasureLootGenerator;
