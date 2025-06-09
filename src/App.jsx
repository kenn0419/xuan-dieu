import BuildMetaverseSection from "./components/BuildMetaverseSection";
import EventGallery from "./components/EventGallery";
import ExploreEventsSection from "./components/ExploreEventsSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <div className="text-white bg-gradient-to-br from-black to-purple-900 min-h-screen relative">
      <Header />
      <HeroSection />
      <BuildMetaverseSection />
      <ExploreEventsSection />
      <FeaturesSection />
      <EventGallery />
      <Footer />
    </div>
  );
}

export default App;
