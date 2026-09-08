import { Routes, Route, useLocation } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout.jsx";
import Hero from "../Pages/Hero/Hero";
import About from "../Pages/About/About";
import Projects from "../pages/Projects/Proyect";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound/NotFound";
import { AnimatePresence } from "motion/react";
import PageTransition from "./PageTransicion.jsx";

function AppRoutes() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>
          
          <Route element={<MainLayout />}> 
            <Route path="/" element={ <PageTransition> <Hero /> </PageTransition>}/>
            <Route path="/about" element={<PageTransition><About /></PageTransition>}/>
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>}/>
            <Route path="/contact"  element={<PageTransition><Contact /></PageTransition>}/>
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>}/>
          </Route>
        </Routes>
        
    </AnimatePresence>
        </>
  );

}

export default AppRoutes;