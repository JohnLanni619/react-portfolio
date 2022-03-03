import resume from '../../assets/JLTechResume.pdf'
import AnimatedPage from "../AnimatedPage"

export default function Resume() {
    return (
        <AnimatedPage>
            <section id="resume">
                <h1>Resume</h1>
                <iframe title="resume" src={resume} width="75%" height="100%" aria-hidden="true">
                </iframe>
            </section>
        </AnimatedPage>
        
    );
};