import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made With 😍 Techinfoyt &copy; 2023</h4>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
