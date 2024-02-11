import Footer from "./screens/Footer";
import Header from "./screens/Header";
import Hero from "./screens/Hero";

const App = () => {
  return (
    <>
      <div className="bg-neutral-900 h-full">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default App;
