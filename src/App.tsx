import Header from "./components/Header";
const App = () => {
  const navItems = [
    { label: "projects", href: "#projects" },
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "contact", href: "#contact" },
  ];
  return (
    <>
      <Header navItems={navItems} />
      <div className="container">
        <h1>Hallo, Steffieboy!</h1>
        <p>Welkom bij je React applicatie.</p>
        <button>Druk op mij!</button>
      </div>
    </>
  );
};
export default App;
