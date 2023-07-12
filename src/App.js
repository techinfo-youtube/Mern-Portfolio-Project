import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Techstack />
      </div>
    </>
  );
}

export default App;
