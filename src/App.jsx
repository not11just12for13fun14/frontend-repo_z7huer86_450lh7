import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-16 space-y-8 max-w-7xl mx-auto px-4 md:px-8 pb-12">
        <Hero />
        <Row title="Trending Now" />
        <Row title="Top Picks for You" genre="Action" />
        <Row title="Because you watched" genre="Sci-Fi" />
        <Row title="Comedies" genre="Comedy" />
      </div>
    </div>
  );
}

export default App;
