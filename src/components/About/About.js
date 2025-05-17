import React from "react";
import Section from "../Common/Section";
import { motion } from "framer-motion";
import Quote from "../Common/Quote";
import FeaturedCard from "../FeatureCard/FeaturedCard";
import { FaGraduationCap } from "react-icons/fa";
import RightSvg from "../../assets/svg/right-pattern.svg";
import { Reveal } from "../Common/Reveal";
import BlurCircles from "../Common/BlurCircles";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Full Stack Web Developer | Data Science Enthusiast"
      className="relative"
    >
      <img
        src={RightSvg}
        alt=""
        className="absolute hidden right-0 bottom-[40%] w-2/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex flex-col min-h-fit text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto items-center md:pt-0 md:pb-16 md:mx-20 z-10"
      >
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10"
        >
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Here's a Little Background.</Reveal>
          </h4>
          <div className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 ">
            <p className="text-base font-light">
              Hi, I am <span className="font-semibold">Priyamvada Shah</span>{" "}
              I am a{" "}
              <span className="font-semibold">Fullstack Web Developer</span>. I
              am proficient in NodeJS, ReactJS & NextJs. Also a minor in data science from IITM. I am looking for new opportunities to
              implement and increase my skills in software development.
            </p>
          </div>

          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Work Experience</Reveal>
          </h4>

          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="April 2025 - Current"
            desc="FullStack Developer at MaddyCustom."
          />

          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="March 2025 - Present"
            desc="Typescript React Developer at DabbaX."
          />

          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="March 2025 - Present"
            desc="Backend Developer at Upraiss(now BuildQuick)."
          />

          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Education</Reveal>
          </h4>

          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <FaGraduationCap className="h-5 w-5 text-white" />
              </div>
            }
            title="2022 - 2026"
            desc="BTech in Computer Science and Engineering from Harcourt Butler Technical University."
          />

          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <FaGraduationCap className="h-5 w-5 text-white" />
              </div>
            }
            title="2024 - 2028"
            desc="BS in Data Science from IIT Madras."
          />

        </motion.div>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <BlurCircles />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative pt-10 md:pt-5 lg:pt-0"
        >
          <Quote />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
