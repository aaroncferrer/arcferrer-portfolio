import './custom.scss';
import Nav from './components/01_nav/Nav';
import Header from './components/02_header/Header';
import About from './components/04_about/About';
import Tech from './components/05_tech/Tech';
import Projects from './components/06_projects/Projects';
import Footer from './components/08_footer/Footer';
import Cursor from './components/cursor/Cursor';
import {motion, useScroll} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

	const {scrollYProgress} = useScroll();

	const [headerRef, headerInView] = useInView({ threshold: 0.5 });
	const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
	const [techRef, techInView] = useInView({ threshold: 0.5 });
	const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
	const [footerRef, footerInView] = useInView({ threshold: 1 });

	useEffect(() => {
		AOS.init({duration: 1000, anchorPlacement: 'center-bottom'})
	}, [])

	return (
		<>
		<Cursor />
		<motion.div
			style={{
				scaleX: scrollYProgress,
				position: "fixed",
				top: 0,
				right: 0,
				left: 0,
				height: 7,
				background: "#fb5708",
				transformOrigin: "0%",
				zIndex: 1
			}}
		>
		</motion.div>
			
		<Nav 
			headerInView={headerInView}
			aboutInView={aboutInView} 
			techInView={techInView} 
			projectsInView={projectsInView} 
			footerInView={footerInView}
		/>
		<Header headerRef={headerRef} />
		<About aboutRef={aboutRef} />
		<Tech techRef={techRef} />
		<Projects projectsRef={projectsRef} />
		<Footer footerRef={footerRef}/>

		</>
  	)
}

export default App;
