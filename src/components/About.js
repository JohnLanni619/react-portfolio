import headshot from "../assets/headshot.jpg";

export default function About() {
  return (
    <div className="layout">
      <div className="hero"></div>
      <section id="about">
        <h1 className="section-title"> About</h1>
        <img src={headshot} alt="headshot" className="headshot" id="headshot" />
        <p>
          I'm a Web Developer and problem solver who specializes in HTML, CSS,
          JavaScript, and React. I have a full-stack background and am also
          proficient in working with Node, GraphQL, and MongoDB. I graduated
          from the Rutgers University Web Development Bootcamp in September 2021
          and have been dedicated to developing my skillset. My goal is to build
          applications that solve problems and deliver an exceptional user
          experience. As a former personal training manager, I’m proficient in
          working with others and am looking forward to collaborating with other
          developers.
        </p>
      </section>
    </div>
  );
}
