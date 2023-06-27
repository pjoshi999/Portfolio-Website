import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
// import About from "./components/About";
// import Education from "./components/Education";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import { lazy } from "react";
import TechStack from "./components/TechStack";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Header />
        <Body />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
