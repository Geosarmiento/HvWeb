const skills = [
  {
    title: "Graphic Design",
    description:
      "Diseño visual enfocado en branding, publicidad, comunicación visual e impresión.",
    technologies: ["Photoshop", "Illustrator", "CorelDRAW"],
  },
  {
    title: "Frontend Development",
    description:
      "Desarrollo de interfaces web responsive con React, JavaScript, HTML, CSS y Sass.",
    technologies: ["React", "JavaScript", "Sass"],
  },
  {
    title: "UI Design",
    description:
      "Diseño de interfaces modernas combinando estética, usabilidad y desarrollo frontend.",
    technologies: ["UI", "Responsive", "Components"],
  },
  {
    title: "3D Design",
    description:
      "Modelado y visualización 3D para productos y espacios.",
    technologies: ["Blender", "Rhino", "V-Ray"],
  },
  {
    title: "Interactive 3D",
    description:
      "Experiencias web interactivas utilizando React, Three.js y React Three Fiber.",
    technologies: ["Three.js", "R3F", "Drei"],
  },
];

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills__header">
        <span>Skills</span>
        <h2>Design, development & 3D</h2>
      </div>

      <div className="skills__grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

            <div className="skill-card__tags">
              {skill.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}