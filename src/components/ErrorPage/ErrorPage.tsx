import { useNavigate } from "react-router-dom";
import "./ErrorPage.css"

export default function ErrorPage() {
  const nav = useNavigate();

  return (
    <div className="error-page">
      <p>Это не та страница, которую Вы ищете, сударь.</p>
      <button onClick={() => nav("/")}>На главную</button>
    </div>
  );
}
