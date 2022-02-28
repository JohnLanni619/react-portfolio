import headshot from '../../assets/headshot.jpg'

export default function About() {

    return(
        <section id="about">
            <h1> About Me</h1>
            <div id="headshot">
                <img src={headshot} alt="headshot" className="my-2"/>
            </div>
            <div className="my-2 about-container">
                <p>
                    I'm a Full Stack Web Developer with a passion for technology and continued learning. I 
                    graduated from the Rutgers University Web Development Bootcamp in September 2021. As a former
                    personal training manager, I’m proficient in working with others and am looking forward to
                    collaborating with other developers to create high quality applications that solve problems and
                    deliver an exceptional user experience.
                </p>
            </div>
        </section>
    )
};