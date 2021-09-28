import React from 'react';
import headshot from '../../assets/headshot.jpg'

const About = () => (
    <section id="about">
        <h1> About Me</h1>
        <div id="headshot">
            <img src={headshot} alt="headshot" className="my-2"/>
        </div>
        <div className="my-2 about-container">
            <p>
            I'm an aspiring full stack web developer. I just finished the Rutgers Coding Bootcamp in September. I want to develop applications that both enhance user experience and also increase company revenue. I'd like to work in an environment that facilitates contiuous learning and development. As a former personal training manager, I'm proficient in working with others towards a common goal. When I'm not coding, I'm working as a personal trainer and spending time with my three year old son.
            </p>
        </div>
    </section>
)

export default About;