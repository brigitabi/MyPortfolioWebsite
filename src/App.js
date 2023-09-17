import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
// import Skills from "./components/Skills";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Skills /> */}
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
