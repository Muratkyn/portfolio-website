"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: "Food App",
    description: "Food delivery App Nextjs + React + Typescript",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muratkyn/food-app",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Travel Web App",
    description: "Travel Web App with Reactjs",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muratkyn/Holydays-Portfolio-Project",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "MK Shop Web App",
    description: "Shopping App with Reactjs",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muratkyn/MK-Shop-Portfolio-Project",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Task-it App",
    description: "Task App with React + Typescript",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Muratkyn/Task-it-Portfolio-Project",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Podmic Project",
    description: "Podcasting App with Bootstrap",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muratkyn/Podmic-project",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Portfolio Website",
    description: "Portfolio Website with Nextjs + Reactjs",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muratkyn/portfolio-website",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true })

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y:50, opacity: 0},
    animate: { y:0, opacity:1}
  }
  return (
    <section ref={ref} id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-8 tracking-wider">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="API"
          isSelected={tag === "API"}
        />
      </div>
      <ul className="grid md:grid-cols-2 gap-8  md:gap-12 lg:gap-8 lg:grid-cols-3 md:contain">
        {filteredProjects.map((project, index ) => (
          <motion.li 
          key={index}
          variants={cardVariants} 
          initial="initial" 
          animate={isInView ? "animate" : "initial"}
          transition={{duration: 0.5, delay: index * 0.5}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      
    </section>
  );
};

export default ProjectsSection;