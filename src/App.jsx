import "./App.css";
import { Conversor } from "./components/Conversor";

function App() {
  return (
    <main className="container-main">
      <div className="back-color">
        <h1>Conversor de divisas</h1>
      </div>
      <Conversor />
    </main>
  );
}

export default App;
