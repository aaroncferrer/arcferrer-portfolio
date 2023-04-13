import './about.css';
import aboutImg from '../../assets/about.png'
import SectionHeader from '../03_section_header/SectionHeader';

function About({aboutRef}){

    return(
        <section id='about' ref={aboutRef}>
            
            <div className="container about__container">

                <SectionHeader sectionNumber="01" sectionName="About Me"/>

                <div className="about__content">
                    <div className="about__info">
                        <p>
                            I'm a Nutrition graduate but my passion for web development led me down a different path. I initially started with basic HTML and CSS, but soon found myself fully immersed in the world of web development. With a small background in <span>graphic design</span>, I found frontend to be a natural fit, but I'm also looking forward to expanding my skill set to include backend work as well. Despite the steep learning curve, I'm loving the process and find it incredibly fulfilling.
                        </p>

                        <p>
                            I've also spent  2 years as a <span>project manager</span> for a copywriting account. Working as a middleman between clients and my team of copywriters, I've gained valuable experience in communication. But when I'm not busy, you can probably find me <span>dancing</span> or curled up with a good paperback <span>manga</span>. Life is all about balance, after all!
                        </p>

                        <article className="about__education">
                            <div className="about__education__header">
                                <h2>EDUCATION</h2>
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

                        <a href='#contact' className='btns btn-primary'>Let's talk</a>
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