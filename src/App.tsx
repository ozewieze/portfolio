import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Hallo, Steffieboy!</h1>
        <p>Welkom bij je React applicatie.</p>
        <button>Druk op mij!</button>
      </div>
    </>
  );
};
export default App;
