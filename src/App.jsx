import Conversor from "./components/Conversor";
import Header from "./components/Header";

function App() {
  return (
    <main className="flex flex-col items-center justify-start bg-white min-h-screen lg:min-h-[90vh]">
      <Header />
      <Conversor />
    </main>
  );
}

export default App;
