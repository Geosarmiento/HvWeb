import "../../styles/_globales.scss";
import "./Project.scss";
import { Windows, Mac } from "../../Components/Icon/Icons.jsx";
import projects from "../../Data/ProjectData.js";
import ProjectCard from "../../Components/ProyectCard/ProjectCard.jsx";
import { useState, useRef } from "react";
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';


const Projects = () => {

  // 1. Clonar las tarjetas (primeras y últimas) para crear la ilusión de loop infinito
  const extendedProjects = [
    projects[projects.length - 1], // Clon del último al inicio
    ...projects,
    projects[0], // Clon del primero al final
  ];

  // Iniciamos en el índice 1 (que corresponde al primer elemento real)
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  const cardWidth = 320 + 20; // Ancho de card + gap (ajusta según tu CSS)

  const nextProject = () => {
    if (activeIndex >= extendedProjects.length - 1) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const previousProject = () => {
    if (activeIndex <= 0) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  // 2. Gestionar el "salto invisible" cuando se llega a un clon
  const handleTransitionEnd = () => {
    // Si llegamos al clon del final, saltamos sin animación al primer elemento real
    if (activeIndex === extendedProjects.length - 1) {
      setIsTransitioning(false);
      setActiveIndex(1);
    }
    // Si llegamos al clon del inicio, saltamos sin animación al último elemento real
    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(extendedProjects.length - 1);
    }
  };

  return (
    <div className="project-container">
      <div className="intro_proyect">
        <div className="icon_proyects">
          <Mac className="icon_proyect" />
          <Windows className="icon_proyect" />
        </div>

        <h1>Projects</h1>
        <p>Skills that combine design, technology, and creativity.</p>
      </div>
<div className="center">
      <section className="projects">
        <div
          ref={trackRef}
          className="projects__track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${activeIndex * cardWidth}px)`,
                transition: isTransitioning
              ? "transform 0.4s ease-in-out"
              : "none", // Desactiva la transición durante el salto invisible
          }}
        >
          {extendedProjects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </section>

      {/* Botones de control */}
      <div className="projects__controls">

        <CircleArrowLeft onClick={previousProject} aria-label="Previous Project"/>

        <CircleArrowRight onClick={nextProject} aria-label="Next Project"/>
      
      </div>
    </div>
    </div>
  );
};

export default Projects;