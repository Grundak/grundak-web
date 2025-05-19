import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import z framer-motion
import Intro from '../pages/Intro';
import Services from '../pages/Services'; // Změna z Gallery na Services
import References from '../pages/References'; // Změna z Exclusivity na References
import Contact from '../pages/Contact'; // Změna z Follow na Contact
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

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
          path="/services"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/references"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <References />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contact />
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