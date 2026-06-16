import { useScrollReveal } from './hooks';

// Layout
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

// UI
import MeshBackground from './components/ui/MeshBackground';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

export default function App() {
  useScrollReveal();

  return (
    <>
      <MeshBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
