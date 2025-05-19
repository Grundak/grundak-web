import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import z framer-motion
import Intro from '../pages/Intro';
import Gallery from '../pages/Gallery';
import Exclusivity from '../pages/Exclusivity';
import Follow from '../pages/Follow';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
// Import stránek, které budou animovány



function AnimatedRoutes() {
    const location = useLocation();
  
    // Definice animací
    const pageVariants = {
      initial: {
        opacity: 0,
        y: 100, // Začíná pod viewportem
      },
      animate: {
        opacity: 1,
        y: 0, // Přesune se na svou pozici
        transition: {
          duration: 1, // Délka animace
          ease: 'easeOut',
        },
      },
      exit: {
        opacity: 0,
        y: -100, // Posune se nahoru mimo viewport
        transition: {
          duration: 1, // Délka animace
          ease: 'easeIn',
        },
      },
    };
  
    return (
      <AnimatePresence mode="wait"> {/* Zajišťuje, že animace probíhá při přechodu */}
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Intro />
              </motion.div>
            }
          />
          <Route
            path="/gallery"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Gallery />
              </motion.div>
            }
          />
          <Route
            path="/exclusivity"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Exclusivity />
              </motion.div>
            }
          />
          <Route
            path="/follow"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Follow />
              </motion.div>
            }
          />
          <Route
            path="/privacy"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Privacy />
              </motion.div>
            }
          />
          <Route
            path="/terms"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Terms />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    );
  }

export default AnimatedRoutes;