import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {VscTools} from 'react-icons/vsc';
import {VscLibrary} from 'react-icons/vsc';
import {BiMessageDetail} from 'react-icons/bi';
import {AiOutlineArrowUp} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Nav(props){

    const container = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.85,
                duration: 0.25,
                delayChildren: 1.2,
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden : {scale: 0},
        visible: {
            scale: 1,
        }
    }

    const {aboutInView, techInView, projectsInView, contactsInView, footerInView} = props;
    const [activeIcon, setActiveIcon] = useState('header');
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        if(footerInView){
            setActiveIcon(null);
            setShowArrow(true);
            return
        }
        if(aboutInView){
            setActiveIcon('about');
            return
        }
        if(techInView){
            setActiveIcon('tech');
            return
        }if(projectsInView){
            setActiveIcon('projects');
            return
        }if(contactsInView){
            setActiveIcon('contact');
            return
        }
        setActiveIcon('header');
        setShowArrow(false);
    }, [aboutInView, techInView, projectsInView, contactsInView, footerInView])

    return(
        <>
        <motion.nav
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <motion.a variants={item} href='#' className={activeIcon === 'header' ? 'active' : null}>
                <AiOutlineHome />
            </motion.a>
            <motion.a variants={item} href='#about' className={activeIcon === 'about' ? 'active' : null}>
                <BsPerson />
            </motion.a>
            <motion.a variants={item} href='#tech' className={activeIcon === 'tech' ? 'active' : null}>
                <VscTools />
            </motion.a>
            <motion.a variants={item} href='#projects' className={activeIcon === 'projects' ? 'active' : null}>
                <VscLibrary />
            </motion.a>
            <motion.a variants={item} href='#contact' className={activeIcon === 'contact' ? 'active' : null}>
                <BiMessageDetail />
            </motion.a>
        </motion.nav>

        {showArrow && (
            <nav className={`nav__arrow ${footerInView ? 'show' : ''}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#' className='arrowUp'><AiOutlineArrowUp /></a>
            </nav>
        )}
            
        </>
    )
}

export default Nav;