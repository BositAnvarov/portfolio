import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './Main.css'; // Import your CSS file for styling

// Reusable component for applying motion animation
function AnimatedComponent({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const controls = useAnimation();

  useEffect(() => {
    console.log(isInView)
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls]);

  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0.25 },
  };

  return (
    <motion.div
      ref={ref}
      variants={motionVariants}
      initial='hidden'
      animate={controls}
      transition={{ duration: 1, delay: 1 }}
    >
      {children}
    </motion.div>
  );
}

function Main() {
  return (
    <main className='main'>
      {/* Home Component */}
      <AnimatedComponent>
        <Home />
      </AnimatedComponent>

      {/* About Component */}
      <AnimatedComponent>
        <About />
      </AnimatedComponent>

      {/* Skills Component */}
      <AnimatedComponent>
        <Skills />
      </AnimatedComponent>

      {/* Projects Component */}
      <AnimatedComponent>
        <Projects />
      </AnimatedComponent>

      {/* Contact Component */}
      <AnimatedComponent>
        <Contact />
      </AnimatedComponent>
    </main>
  );
}

export default Main;
