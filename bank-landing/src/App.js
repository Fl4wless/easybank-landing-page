import "./App.css";
import ArticlesSection from "./components/Articles/ArticlesSection";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Hero />
      <Navbar />
      <Benefits />
      <ArticlesSection />
      <Footer />
    </div>
  );
}

export default App;
