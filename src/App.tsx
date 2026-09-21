import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
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
      </main>
    </>
  );
};
export default App;
