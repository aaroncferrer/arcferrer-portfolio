import './about.css';
import aboutImg from '../../assets/about.png'
import SectionHeader from '../03_section_header/SectionHeader';

function About({aboutRef}){

    return(
        <section id='about' ref={aboutRef} data-aos="fade-up" data-aos-once>
            
            <div className="container about__container">

                <SectionHeader sectionNumber="01" sectionName="About Me"/>

                <div className="about__content">
                    <div className="about__info">
                        <p>
                            I'm a licensed Nutritionist-Dietitian but my passion for web development led me down a different path. I initially started with basic HTML and CSS, but soon found myself fully immersed in the world of web development. With a small background in <span>graphic design</span>, I found frontend to be a natural fit, but I'm also looking forward to expanding my skill set to include backend work as well. Despite the steep learning curve, I'm loving the process and find it incredibly fulfilling.
                        </p>

                        <p>
                            I've also spent  2 years as a <span>project manager</span> for a copywriting account. Working as a middleman between clients and my team of copywriters, I've gained valuable experience in communication. But when I'm not busy, you can probably find me <span>dancing</span> or curled up with a good paperback <span>manga</span>. Life is all about balance, after all! <span>🤓</span>
                        </p>

                        <p>
                            I was able to gain practical experience as a software engineer intern at Focus HQ, engaging in Agile methodologies, code reviews, and pair programming sessions. Under the guidance of our tech lead, I have successfully converted non-SPA pages to SPA using React with TypeScript, resulting in improved user experiences and performance. I have also collaborated with the team to create testing files using Jest and React Testing Library, ensuring the reliability of our SPAs and their components.
                        </p>

                        <article className="about__education">
                            <div className="about__education__header">
                                <h2>EDUCATION | EXPERIENCE</h2>
                            </div>

                            <div className="about__educations">
                                <small>May 2023 - June 2023</small>
                                <small>Focus HQ</small>
                            </div>

                            <div className="about__educations">
                                <small>Oct 2022 - Present</small>
                                <small>Avion School</small>
                            </div>
                            <div className="about__educations">
                                <small>May 2022 - June 2022</small>
                                <small>Zuitt Coding Bootcamp</small>
                            </div>
                            <div className="about__educations">
                                <small>Aug 2015 - Feb 2021</small>
                                <small>University of the Philippines Los Baños</small>
                            </div>
                        </article>

                        <a href='#projects' className='btns btn-primary'>View Projects</a>
                    </div>

                    <div className="about__image__container">
                        <div className="about__image">
                            <img src={aboutImg} alt='About' />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About;