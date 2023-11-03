import { useEffect } from "react";
import "./App.css";
import MainRoutes from "./routes/Main.route";

function App() {
  useEffect(() => {
    localStorage.setItem("isAdmin", true);
  }, []);

  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
