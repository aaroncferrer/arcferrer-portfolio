import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {VscTools} from 'react-icons/vsc';
import {VscLibrary} from 'react-icons/vsc';
import {BiMessageDetail} from 'react-icons/bi';
import { useState, useEffect } from 'react';

function Nav(props){

    const {aboutInView, techInView, projectsInView, contactsInView} = props;

    const [activeIcon, setActiveIcon] = useState('header');

    useEffect(() => {
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
        } setActiveIcon('header');
    }, [aboutInView, techInView, projectsInView, contactsInView])

    return(
        <nav>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#' className={activeIcon === 'header' ? 'active' : null}>
                <AiOutlineHome />
            </a>
            <a href='#about' className={activeIcon === 'about' ? 'active' : null}>
                <BsPerson />
            </a>
            <a href='#tech' className={activeIcon === 'tech' ? 'active' : null}>
                <VscTools />
            </a>
            <a href='#projects' className={activeIcon === 'projects' ? 'active' : null}>
                <VscLibrary />
            </a>
            <a href='#contact' className={activeIcon === 'contact' ? 'active' : null}>
                <BiMessageDetail />
            </a>
        </nav>
    )
}

export default Nav;