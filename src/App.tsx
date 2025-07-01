
// components
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import ProjectShowcase from "./components/ProjectShowcase"

function App() {

  return (
    <div className="bg-background text-primary">
      <Header />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <div className="h-screen bg-neutral-900" id="about"></div>
        <div className="h-screen bg-black" id="contact"></div>
      </main>
    </div>
  )
}

export default App
