import React from 'react';
import resume from '../../assets/JLTechResume.pdf'
import {SiAdobeacrobatreader} from 'react-icons/si'


function Resume() {
    return (
        <section id="resume">
            <h1>Resume</h1>
            <h2>Proficiencies:</h2>
            <div>
                <ul>
                    <li>HTML/CSS/JavaScript</li>
                    <li>SQL/MYSQL/MongoDB</li>
                    <li>Node.js/Express.js/React.js</li>
                    <li>Click on icon below to see full resume!</li>
                </ul>
                <a href={resume}><SiAdobeacrobatreader/></a>
            </div>
        </section>
    );
}

export default Resume;