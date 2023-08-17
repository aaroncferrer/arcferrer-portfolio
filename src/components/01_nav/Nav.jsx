import './nav.css';
import {AiOutlineArrowDown, AiOutlineHome} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {VscTools, VscLibrary} from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Nav(props){

    const container = {
        hidden: {scale: 0},
        visible: {
            scale: 1,
            transition: {
                delay: 0.85,
                duration: 0.40,
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
    
    const {headerInView, aboutInView, techInView, projectsInView, footerInView} = props;
    const [activeIcon, setActiveIcon] = useState('header');

    useEffect(() => {
        if(headerInView){
            setActiveIcon('header');
            console.log(activeIcon)
            return
        }
        if(aboutInView){
            setActiveIcon('about');
            console.log(activeIcon)
            return
        }
        if(techInView){
            setActiveIcon('tech');
            console.log(activeIcon)
            return
        }if(projectsInView){
            setActiveIcon('projects');
            console.log(activeIcon)
            return
        }if(footerInView){
            setActiveIcon('footer');
            console.log(activeIcon)
            return
        }
    }, [headerInView, aboutInView, techInView, projectsInView, footerInView, activeIcon])

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
            <motion.a variants={item} href='#footer' className={activeIcon === 'footer' ? 'active' : null}>
                <AiOutlineArrowDown />
            </motion.a>
        </motion.nav>         
        </>
    )
}

export default Nav;