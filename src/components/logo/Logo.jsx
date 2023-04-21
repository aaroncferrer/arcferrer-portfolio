import './logo.css';
import {motion} from 'framer-motion';

function Logo(){
    return(
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
    )
}

export default Logo;