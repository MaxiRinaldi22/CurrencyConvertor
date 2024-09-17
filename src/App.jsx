import Conversor from "./components/Conversor";
import Header from "./components/Header";

function App() {
  return (
    <main className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Conversor />
    </main>
  );
}

export default App;
