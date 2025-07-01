
// components
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import ProjectShowcase from "./components/ProjectShowcase"
import AboutSection from "./components/AboutSection"

function App() {

  return (
    <div className="bg-background text-primary">
      <Header />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <AboutSection />
        <div className="h-screen bg-black" id="contact"></div>
      </main>
    </div>
  )
}

export default App
