import { Routes, Route, useLocation } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout.jsx";
import Hero from "../Pages/Hero/Hero";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Project";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound/NotFound";
import { AnimatePresence } from "motion/react";
import PageTransition from "./PageTransicion.jsx";

import PageDesign from "../Pages/PageDesign/PageDesign.jsx";
import PageWebApp from "../Pages/PageWebApp/PageWebApp.jsx"; 
import PageBranding from "../Pages/PageBranding/PageBranding.jsx"; 
import PageFrontend from "../Pages/PageFrontend/PageFrontend.jsx"; 
import PageThreeD from "../Pages/PageThreeD/PageThreeD.jsx";



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
            
            <Route path="/design" element={<PageTransition><PageDesign /></PageTransition>}/> 
            <Route path="/frontend" element={<PageTransition><PageFrontend /></PageTransition>}/> 
            <Route path="/3d" element={<PageTransition><PageThreeD /></PageTransition>}/> 
            <Route path="/branding" element={<PageTransition><PageBranding /></PageTransition>}/>
            <Route path="/webApp" element={<PageTransition><PageWebApp /></PageTransition>}/>

          </Route>

        </Routes>

    </AnimatePresence>
        </>
  );

}

export default AppRoutes;