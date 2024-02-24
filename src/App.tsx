import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const nav = useNavigate();

  return (
    <div className="app">
      <button onClick={() => nav("/hoard-loot-generator")}>Лут с мобов</button>
      <button onClick={() => nav("/treasure-loot-generator")}>Сокровищница</button>
    </div>
  );
}

export default App;
