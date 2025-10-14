import { useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { CoinFlipTransition } from "./components/CoinFlipTransition";
import { PageTransition } from "./components/PageTransition";

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [currentPage, setCurrentPage] = useState("about");

  const handleEnter = () => {
    setShowLanding(false);
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  if (showLanding) {
    return <LandingPage onEnter={handleEnter} />;
  }

  if (showTransition) {
    return <CoinFlipTransition onComplete={handleTransitionComplete} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        <PageTransition pageKey={currentPage}>
          {renderPage()}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
