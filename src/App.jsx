import './custom.scss';

import Header from './components/02_header/Header';
import About from './components/04_about/About';
import Tech from './components/05_tech/Tech';
import Projects from './components/06_projects/Projects';
import Footer from './components/07_footer/Footer';

import {motion, useScroll} from 'framer-motion';

function App() {

	const {scrollYProgress} = useScroll();

	return (
		<>
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
			<Header />
			<About />
			<Tech />
			<Projects />
			<Footer />
		</>
  	)
}

export default App;
