import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import {projects} from "./data/projects";

export default function App() {
  return (
    <section>
      <Nav />
      <About />
      <Project projects={projects} />
      <Footer />
    </section>
  );
}
