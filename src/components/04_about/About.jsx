import "./about.css";
import aboutImg from "../../assets/about.png";
import SectionHeader from "../03_section_header/SectionHeader";

function About({ aboutRef }) {
  return (
    <section id="about" ref={aboutRef} data-aos="fade-up" data-aos-once>
      <div className="container about__container">
        <SectionHeader sectionNumber="01" sectionName="About Me" />

        <div className="about__content">
          <div className="about__info">
            <p>
              I'm a licensed Nutritionist-Dietitian but my passion for web
              development led me down a different path. I initially started with
              basic HTML and CSS, but soon found myself fully immersed in the
              world of web development. With a small background in{" "}
              <span>graphic design</span>, I initially found frontend to be a
              natural fit, but after getting exposed to Ruby and Ruby on Rails,
              I discovered a new appreciation for backend and full-stack
              development, especially because of its convention over
              configuration approach. Despite the steep learning curve, I'm
              loving the process and find it incredibly fulfilling.
            </p>

            <p>
              I've also spent 2 years as an <span>account manager</span> for a
              copywriting account. Working as a middleman between clients and my
              team of copywriters, I've gained valuable experience in
              communication. But when I'm not busy, you can probably find me{" "}
              <span>dancing</span> or curled up with a good paperback{" "}
              <span>manga</span>. Life is all about balance, after all!{" "}
              <span>🤓</span>
            </p>

            <p>
              I was able to gain practical experience as a software engineer
              intern at Focus HQ, engaging in Agile methodologies, code reviews,
              and pair programming sessions. Under the guidance of our tech
              lead, I have successfully converted non-SPA pages to SPA using
              React with TypeScript, resulting in improved user experiences and
              performance. I have also collaborated with the team to create
              testing files using Jest and React Testing Library, ensuring the
              reliability of our SPAs and their components.
            </p>

            <article className="about__education">
              <div className="about__education__header">
                <h2>EXPERIENCE</h2>
              </div>

              <div className="about__educations">
                <small>Nov 2023 - Present</small>
                <small>Likha-iT - Software Engineer</small>
              </div>

              <div className="about__educations">
                <small>May 2023 - June 2023</small>
                <small>Focus HQ - Software Engineer Intern</small>
              </div>

              <div className="about__educations">
                <small>Apr 2021 - Feb 2023</small>
                <small>Sanctum Co. - Account Manager</small>
              </div>
            </article>

            <a href="#projects" className="btns btn-primary">
              View Projects
            </a>
          </div>

          <div className="about__image__container">
            <div className="about__image">
              <img src={aboutImg} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
