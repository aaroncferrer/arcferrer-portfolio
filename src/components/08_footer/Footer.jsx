import './footer.css';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Logo from '../logo/Logo';

function Footer({footerRef}){
    return(
        <footer id='footer' ref={footerRef}>
            
            <div className="container footer__container">
                <div className="footer__logo">
                    <Logo />
                </div>
                <div className="footer__sections">
                    <a href='#about'>HOME</a>
                    <a href='#about'>ABOUT</a>
                    <a href='#about'>TECH</a>
                    <a href='#about'>PROJECTS</a>
                </div>
                <div className="footer__copyright">
                    <p>Copyright © 2023 Anthony Ferrer All Rights Reserved.</p>
                    <div className="copyright__socials">
                        <a href="https://www.github.com/aaroncferrer" target="_blank" rel='noreferrer'><FaGithub /></a>
                        <a href="mailto:arcferrer5@gmail.com" target='_blank' rel='noreferrer'><AiOutlineMail /></a>
                    </div>
                    <a href='https://github.com/aaroncferrer/arcferrer-portfolio' target="_blank" rel='noreferrer' className='footer__src'>Source Code</a>
                </div>
            </div>            

        </footer>
    )
}

export default Footer;