import './header.css';
import Resume from '../../assets/ARCFerrer_Resume_2023.pdf';
import HeaderSocials from './HeaderSocials';

function Header(){
    return(
        <header>
            <div className="logo">AF</div>

            <div className="container header__container">
                <h5>You found me! Hi, I'm</h5>
                <h1>Anthony Ferrer.</h1>
                <h1 className='header__slogan'>Building the web <span>one line at a time.</span></h1>
                <p>
                Software engineer well-versed in account management with demonstrated skills in frontend web development and graphic design. Dynamic, detail-oriented, and a self-driven tech enthusiast who makes sure to get the job done.
                </p>
                
                <div className="header__buttons">
                    <a href={Resume} download className='btns btn-primary'>Download Resumé</a>
                    <a href={Resume} download className='btns btn-secondary'>Let's talk</a>
                </div>
            </div>

            <HeaderSocials />
            <small>arcferrer5@gmail.com</small>
        </header>
    )
}

export default Header;