import SectionHeader from '../03_section_header/SectionHeader';
import './projects.css';

function Projects({projectsRef}){
    return(
        <section id="projects" ref={projectsRef}>
            
            <div className="container projects__container">

            <SectionHeader sectionNumber="03" sectionName="Sample Projects"/>

            <div className="projects__grid">
                <div className="projects">
                    <div className="project square"></div>
                    <div className="project rectangle"></div>
                    <div className="project square"></div>
                </div>
                <div className="projects">
                    <div className="project rectangle"></div>
                    <div className="project square"></div>
                    <div className="project square"></div>
                </div>   
            </div>

            </div>

        </section>
    )
}

export default Projects;