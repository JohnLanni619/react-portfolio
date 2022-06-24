import headshot from "../../assets/headshot.jpg";
import { projects } from "../../data/projects";
import Project from "../Project";

export default function About() {
  return (
    <div className="layout">
      <section id="about">
        <h1 className="section-title"> About Me</h1>
        <div id="headshot">
          <img src={headshot} alt="headshot" className="headshot" />
        </div>
        <p>
          I'm a Full Stack Web Developer with a passion for technology and
          continued learning. I graduated from the Rutgers University Web
          Development Bootcamp in September 2021. As a former personal training
          manager, I’m proficient in working with others and am looking forward
          to collaborating with other developers to create high quality
          applications that solve problems and deliver an exceptional user
          experience.
        </p>
      </section>
      <section id="projects">
        <h1 className="section-title">Projects</h1>
        <Project projects={projects} />
      </section>
    </div>
  );
}
