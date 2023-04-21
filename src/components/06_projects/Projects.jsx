import SectionHeader from '../03_section_header/SectionHeader';
import './projects.css';
import projectsData from './projects.json';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BsGithub } from 'react-icons/bs';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

function Projects({projectsRef}){

    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const leftColumnProjects = projectsData.leftColumnProjects;
    const rightColumnProjects = projectsData.rightColumnProjects;

    const handleClick = (project) => {
        setSelectedProject(project);
    }

    return(
        <section id="projects" ref={projectsRef}>
            
            <div className="container projects__container">

            <SectionHeader sectionNumber="03" sectionName="Sample Works"/>

            <div className="projects__grid">
                {/* LEFT COLUMN PROJECTS */}
                <div className="projects projects__left">
                    {leftColumnProjects.map((project) => (
                    <div 
                        className="project" 
                        key={project.id}
                        onClick={() => {handleClick(project); setShowModal(true)}}
                    >
                        <img src={project.imgSrc} alt={project.imgAlt} className={project.shape} />
                        <div className="project__desc">
                            <p>{project.title}</p>
                            {project.techs.map((tech, index) => (
                                <small key={index}>{tech}</small>
                            ))}
                        </div>
                    </div>
                    ))}
                    
                </div>
                
                {/* RIGHT COLUMNN PROJECTS */}
                <div className="projects projects__right">
                    {rightColumnProjects.map((project) => (
                    <div 
                        className="project" 
                        key={project.id}
                        onClick={() => {handleClick(project); setShowModal(true)}}
                    >
                        <img src={project.imgSrc} alt={project.imgAlt} className={project.shape} />
                        <div className="project__desc">
                            <p>{project.title}</p>
                            {project.techs.map((tech, index) => (
                                <small key={index}>{tech}</small>
                            ))}
                        </div>
                    </div>
                    ))}
                </div>  
            </div>

            {selectedProject && (
                <Modal 
                    centered 
                    show={showModal} 
                    onHide={() => setShowModal(false)}
                    size="lg"
                >
                    <Modal.Header>
                        <Modal.Title>{selectedProject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedProject.imgSrc2} alt={selectedProject.imgAlt} className="modal__img" />
                        <p className='modal__desc'>{selectedProject.desc}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <a href={selectedProject.github} target='_blank' rel='noreferrer'>
                            <BsGithub />
                        </a>
                        <a href={selectedProject.demo} target='_blank' rel='noreferrer'>
                            <BsArrowUpRightCircleFill />
                        </a>
                    </Modal.Footer>
                </Modal>
            )}

            </div>

        </section>
    )
}

export default Projects;