import React from 'react';
import resume from '../../assets/JLTechResume.pdf'
import {SiAdobeacrobatreader} from 'react-icons/si'


function Resume() {
    return (
        <section id="resume">
            <h1>Resume</h1>
            <div className="card-container">
                <ul className="card">
                    <li>HTML/CSS/JavaScript</li>
                    <li>SQL/MYSQL/MongoDB</li>
                    <li>Node.js/Express.js/React.js</li>
                    <li>MERN Stack Development</li>
                    <li>Click on icon below to see full resume!</li>
                    <li><a href={resume}><SiAdobeacrobatreader/></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;