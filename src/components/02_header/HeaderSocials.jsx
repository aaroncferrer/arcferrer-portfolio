import {FaGithub} from 'react-icons/fa';
import {BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs';
import {motion} from 'framer-motion';

function HeaderSocials(){


    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                    duration: 0.4, 
                    ease: "easeInOut",
                    delay: 0.5
                }}
        >
            <div className="header__socials">
                <a href="https://www.github.com/aaroncferrer" target="_blank" rel='noreferrer'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anthony-ferrer-rnd-549a30191/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
                <a href="https://twitter.com/aaroncferrer" target="_blank" rel='noreferrer'><BsTwitter /></a>
                <a href="https://www.instagram.com/aaroncferrer/" target="_blank" rel='noreferrer'><BsInstagram /></a>
            </div>

            {/* <small>arcferrer5@gmail.com</small> */}
        </motion.div>
    )
}

export default HeaderSocials;