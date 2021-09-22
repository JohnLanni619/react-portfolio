import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { ExternalLink } from 'react-external-link';

const Project = () => (
    <section id="work">
        <h1>Projects</h1>
        <div class="flexbox-container">
            <div class="flexbox-item flexbox-item-1">
                <ExternalLink href="https://github.com/JohnLanni619/anime-storefront">
                    <GoMarkGithub id="git-icon"/>
                </ExternalLink>
                <ExternalLink id="dep-link" href="https://arcane-waters-50733.herokuapp.com/">
                    <h4>The Anime Shop</h4>
                    <p>MYSQL/Sequelize/Express.js/Node.js/Handlebars/Heroku</p>
                </ExternalLink>
            </div>
            <div class="flexbox-item flexbox-item-2">
                <ExternalLink href="https://github.com/bryanjperez/group6random">
                    <GoMarkGithub id="git-icon"/>
                </ExternalLink>
                <ExternalLink id="dep-link" href="https://bryanjperez.github.io/group6random/">
                    <h4>Ambience</h4>
                    <p>HTML/CSS/JavaScript/jQuery/APIs</p>
                </ExternalLink>
            </div>
            <div class="flexbox-item flexbox-item-3">
                <ExternalLink href="https://github.com/JohnLanni619/budget-tracker">
                    <GoMarkGithub id="git-icon"/>
                </ExternalLink>
                <ExternalLink id="dep-link" href="https://powerful-cove-91999.herokuapp.com/">
                    <h4>Budget Tracker</h4>
                    <p>HTML/CSS/JavaScript/JQuery</p>
                </ExternalLink>
            </div>
            <div class="flexbox-item flexbox-item-4">
                <ExternalLink href="https://github.com/JohnLanni619/Work-Day-Scheduler">
                    <GoMarkGithub id="git-icon"/>
                </ExternalLink>
                <ExternalLink id="dep-link" href="https://johnlanni619.github.io/Work-Day-Scheduler/">
                    <h4>Work Day Scheduler</h4>
                    <p>HTML/CSS/JavaScript</p>
                </ExternalLink>
            </div>
            <div class="flexbox-item flexbox-item-5">
                <ExternalLink href="https://github.com/JohnLanni619/Employee-Tracker">
                    <GoMarkGithub id="git-icon"/>
                </ExternalLink>
                <ExternalLink id="dep-link" href="https://drive.google.com/file/d/1GiH2cqTlgVF6Av0wM6lFQRbnQ9gWxatq/view">
                    <h4>Employee Tracker</h4>
                    <p>Node.js/Inquirer/MySQL</p>
                </ExternalLink>
            </div>
            <div class="flexbox-item flexbox-item-6">
                <ExternalLink href="https://github.com/JohnLanni619/habit-tracker">
                    <GoMarkGithub id="git-icon"/>
                </ExternalLink>
                <ExternalLink id="dep-link" href="https://boiling-beach-80721.herokuapp.com/">
                    <h4>Hype Machine</h4>
                    <p>MERN Stack/GraphQL/Apollo</p>
                </ExternalLink>
            </div>
        </div>
    </section>
)

export default Project;