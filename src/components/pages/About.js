import React from 'react';
import headshot from '../../assets/headshot.jpg'

const About = () => (
    <section id="about">
        <h1> About Me</h1>
        <img src={headshot} alt="headshot" className="my-2"/>
        <div className="my-2">
            <p>
            I'm an aspiring full stack web developer, currently working through the Rutgers Coding Bootcamp. When I'm not practicing coding, I'm working as a personal trainer and spending time with my three year old son.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nobis blanditiis saepe ipsa est illo? Quaerat quibusdam nulla animi sed mollitia officia nobis? Necessitatibus reprehenderit modi nihil praesentium atque excepturi!
            </p>
        </div>
    </section>
)

export default About;