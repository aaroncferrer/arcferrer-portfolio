import './header.css';
import Resume from '../../assets/ARCFerrer_Resume_2023.pdf';
import HeaderSocials from './HeaderSocials';
import {motion} from 'framer-motion';
import HeaderCircle from './HeaderCircle';

function Header({headerRef}){

    const container = {
        hidden: {opacity: 1, scale: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.85,
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden : {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return(
        <header ref={headerRef}>
            <motion.a 
                href='#'
                className="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.4, 
                    ease: "easeInOut",
                    delay: 0.3
                }}
            >
                AF
            </motion.a>

            <motion.div 
                className="container header__container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.h5 variants={item}>You found me! Hi, I'm</motion.h5>
                
                <motion.div variants={item} class="header__name__container">
                    <h1 class="header__name">ANTHONY FERRER</h1>
                    <HeaderCircle />
                </motion.div>
                

                <motion.h1 className='header__slogan' variants={item}>
                    Building the web <span>one line at a time.</span>
                </motion.h1>
                <motion.p variants={item}>
                    Software engineer well-versed in account management with demonstrated skills in frontend web development and graphic design. Dynamic, detail-oriented, and a self-driven tech enthusiast who makes sure to get the job done.
                </motion.p>
                
                <motion.div className="header__buttons" variants={item}>
                    <a href={Resume} download className='btns btn-primary'>Download Resumé</a>
                    <a href='#contact' className='btns btn-secondary'>View Projects</a>
                </motion.div>
            </motion.div>

            <HeaderSocials />
        </header>
    )
}

export default Header;