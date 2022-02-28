import Project from '../Project';
import anime from '../../assets/anime.jpg'; import budget from '../../assets/budget.jpg';
import ambience from '../../assets/ambience.jpeg'; import workDay from '../../assets/work-day-scheduler.jpeg';
import employeeTracker from '../../assets/employee-tracker.jpeg'; import hypeMachine from '../../assets/hype-machine.jpg';

export default function  Projects() {
    const websites = [
        {
            name: "The Anime Shop",
            technologies: "MYSQL/Sequelize/Express/Node/Handlebars/Heroku",
            gitLink: "https://github.com/JohnLanni619/anime-storefront",
            deployLink: "https://arcane-waters-50733.herokuapp.com/",
            image: anime
        },
        {
            name: "Ambience",
            technologies: "HTML/CSS/JavaScript/jQuery",
            gitLink: "https://github.com/bryanjperez/group6random",
            deployLink: "https://bryanjperez.github.io/group6random/",
            image: ambience
        },
        {
            name: "Budget Tracker",
            technologies: "HTML/CSS/JavaScript",
            gitLink: "https://github.com/JohnLanni619/budget-tracker",
            deployLink: "https://powerful-cove-91999.herokuapp.com/",
            image: budget
        },
        {
            name: "Work Day Scheduler",
            technologies: "HTML/CSS/JavaScript",
            gitLink: "https://github.com/JohnLanni619/Work-Day-Scheduler",
            deployLink: "https://johnlanni619.github.io/Work-Day-Scheduler/",
            image: workDay
        },
        {
            name: "Employee Tracker",
            technologies: "Node/Inquirer/MySQL",
            gitLink: "https://github.com/JohnLanni619/Employee-Tracker",
            deployLink: "https://drive.google.com/file/d/1GiH2cqTlgVF6Av0wM6lFQRbnQ9gWxatq/view",
            image: employeeTracker
        },
        {
            name: "Hype Machine",
            technologies: "MERN Stack/GraphQL/Apollo",
            gitLink: "https://github.com/JohnLanni619/hype-machine",
            deployLink: "https://boiling-beach-80721.herokuapp.com/",
            image: hypeMachine
        },
    ]

    return (
        <section id="work">
            <h1>Projects</h1>
            <Project websites={websites} />
        </section>
    )
}