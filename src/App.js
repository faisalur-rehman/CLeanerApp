// import "./App.css";
import AppBanner from "./components/AppBanner/AppBanner";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <AppBanner />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
