import SectionHeader from '../03_section_header/SectionHeader';
import './tech.css';

function Tech({techRef}){
    return(
        <section id='tech' ref={techRef} data-aos="fade-up" data-aos-once>
            
            <div className="container tech__container">

            <SectionHeader sectionNumber="02" sectionName="Tech I Use"/>

            <div className="techs">
                <div className="tech_item">
                    <p>HTML</p>
                    <i class="ewan devicon-html5-plain colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>CSS</p>
                    <i class="devicon-css3-plain colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>JavaScript</p>
                    <i class="devicon-javascript-plain colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>Bootstrap</p>
                    <i class="devicon-bootstrap-plain colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>ReactJS</p>
                    <i class="devicon-react-original colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>NodeJS</p>
                    <i class="devicon-nodejs-plain colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>ExpressJS</p>
                    <i class="devicon-express-original colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>MongoDB</p>
                    <i class="devicon-mongodb-plain colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>Github</p>
                    <i class="devicon-github-original colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>VS Code</p>
                    <i class="devicon-vscode-plain colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>Photoshop</p>
                    <i class="devicon-photoshop-plain colored tech"></i>
                </div>
                <div className="tech_item">
                    <p>Canva</p>
                    <i class="devicon-canva-original colored tech"></i>
                </div>
            </div>

            </div>

        </section>
    )
}

export default Tech;