import {FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

function HeaderSocials(){
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/anthony-ferrer-rnd-549a30191/" target="_blank" rel='noreferrer'><FaGithub /></a>
            <a href="https://github.com/aaroncferrer" target="_blank" rel='noreferrer'><BsLinkedin /></a>
            <a href="https://twitter.com/aaroncferrer" target="_blank" rel='noreferrer'><BsTwitter /></a>
            <a href="https://www.instagram.com/aaroncferrer/" target="_blank" rel='noreferrer'><BsInstagram /></a>
        </div>
    )
}

export default HeaderSocials;