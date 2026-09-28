import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Overslaan en naar hoofdinhoud gaan
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
export default App;
