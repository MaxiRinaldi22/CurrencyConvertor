import AboutCurrencyConverter from "./components/AboutCurrencyConverter";
import Conversor from "./components/Conversor";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="flex flex-col items-center justify-start bg-white min-h-screen lg:min-h-[100vh]">
      <Header />
      <Conversor />
      <AboutCurrencyConverter />
      <Footer />
    </main>
  );
}

export default App;
