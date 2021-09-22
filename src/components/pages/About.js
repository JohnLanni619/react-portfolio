import React from 'react';
import headshot from '../../assets/headshot.jpg'

const About = () => (
    <section id="about">
        <h1> About Me</h1>
        <div id="headshot">
            <img src={headshot} alt="headshot" className="my-2"/>
        </div>
        <div className="my-2">
            <p>
            I'm an aspiring full stack web developer, currently working through the Rutgers Coding Bootcamp. When I'm not practicing coding, I'm working as a personal trainer and spending time with my three year old son.
            </p>
        </div>
    </section>
)

export default About;