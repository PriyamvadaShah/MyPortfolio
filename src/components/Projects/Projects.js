import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./Motion";
import Featured from "./Featured";
import Section from "../Common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";
import kaizo from "../../assets/kaizo.png";
import wellmindzone from "../../assets/wellmindzone.png";
import portfolioo from "../../assets/portfolioo.png";

export const projectsData = [
  {
    id: 1,
    thumbnail: kaizo,
    title: "Kaizo - Game Store ",
    description: "An game library with attractive UI and features.",
    live: "https://game-library-a9fa86.netlify.app/",
    code: "https://github.com/PriyamvadaShah/Game-Library",
    tech: ["React JS, Node JS, Express, Docker, MongoDB"],
    featured: false,
  },
  {
    id: 2,
    thumbnail: wellmindzone,
    title: "WellMindZone - Mental Health Platform",
    description:
      "A platform to help people with mental health issues.",
    code: "https://github.com/PriyamvadaShah/WellMindZone",
    tech: ["React JS, Node JS, Express, Docker, MongoDB"],
    featured: false,
  },
  {
    id: 3,
    thumbnail: "../../assets/kaizo.png",
    title: "Foodie Express | Food Ordering Website ",
    description:
      "A food ordering website with attractive UI and features.",
    code: "https://github.com/PriyamvadaShah/Food-Ordering-Website-Foodie-Express-",
    tech: ["React JS, Node JS, Express, MongoDB"],
    featured: false,
  },
  {
    id: 4,
    thumbnail: portfolioo,
    title: "My Portfolio - The one you're looking at! ",
    description:
      "A portfolio website to showcase my work and skills.",
    code: "https://github.com/PriyamvadaShah/My-Portfolio",
    tech: ["React JS"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
      <span>
        For More Projects and Other work visit my{" "}
        <a
          href="https://github.com/PriyamvadaShah?tab=repositories&q=&type=source&language=&sort="
          style={{ fontWeight: "bold", color: "red" }}
        >
          GitHub
        </a>
      </span>
    </Section>
  );
};

export default Projects;
