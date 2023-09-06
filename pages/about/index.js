import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAmazonaws,
  SiBootstrap,
  SiDotnet,
  SiFirebase,
  SiFramer,
  SiGoogle,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End Development",
        icons: [
          {
            icon: <FaHtml5 />,
            name: "HTML"
          },
          {
            icon: <FaCss3 />,
            name: 'Css'
          },
          {
            icon: <FaJs />,
            name: 'Javascript'
          },
          {
            icon: <FaReact />,
            name: "React.Js"
          },
          {
            icon: <SiNextdotjs />,
            name: "Next.Js"
          },
          {
            icon: <SiTailwindcss />,
            name: 'TailWind'
          },
          {
            icon: <SiBootstrap />,
            name: 'Bootstrap'
          },
          {
            icon: <SiMui />,
            name: 'Mui'
          },
        ],
      },
      {
        title: "Back-End Development",
        icons: [
          {
            icon: <SiDotnet />,
            name: "C#"
          },
          {
            icon: <SiNodedotjs />,
            name: "Node.Js"
          },
        ],
      },
      {
        title: "Database",
        icons: [
          {
            icon: <SiMysql />,
            name: "MySQL"
          },
          {
            icon: <SiMongodb />,
            name: 'MongoDB'
          },
          {
            icon: <SiFirebase />,
            name: 'FireBase'
          }
        ],
      },
      {
        title: "DevOps",
        icons: [{
          icon: <SiGoogle />,
          name: 'Google Cloud Platform'
        }, {
          icon: <SiAmazonaws />,
          name: 'Amazon Web Services'
        }],
      },
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: "Google Cloud Platform - SkillUp",
        stage: "2023",
      },
      {
        title: "Amazon Web Services - LearnTube",
        stage: "2023",
      },
      {
        title: "Full Stack Web Developement - Bhart Intern",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer - Easyrewards",
        stage: "Mar 2022 - Feb 2023",
      },
      {
        title: "Trainee - BrigdeLabz",
        stage: "Sep 2021 - Mar 2022",
      }
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BSc (CS) - Dr. D Y Patil College, Pune",
        stage: "2017 - 2020",
      }
    ],
  },
];

import { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {

  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        className="xl:flex absolute bottom-0 -left-[21vh] xl:h-[450px] max-[1400px]:-left-[28vh] hidden"
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex-col justify-center">
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2 variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden" className="title">When <span className="text-accent">imagination meets </span>narrative, incredible designs come to life.</motion.h2>
            <motion.p variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden" className="max-w-[700px] mx-auto xl:mx-0 px-2 xl:px-0 max-[1000px]:hidden z-20">
              Highly skilled Full Stack Web Developer with expertise in .NET and React, coupled
              with a strong background in Cloud Engineering with a focus on Google Cloud
              Platform (GCP). <br /> Committed to delivering innovative, scalable, and robust solutions,
              leveraging the power of cutting-edge technologies. <br /> Adept at bridging the gap
              between front-end and back-end development, while seamlessly integrating cloud-based architectures to drive efficiency and optimize performance.
              <br /> A year of experience in corporate company and 3+ years of experience in developing my skills.
            </motion.p>            
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:mt-[2.9rem]">
          <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden" className="flex gap-x-4 md:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:!bg-accent after:transition-all after:duration-300 cursor-pointer'} 
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              )
            })}
          </motion.div>
          <motion.div variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-1">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((data, itemIndex) => {
                      return <div key={itemIndex}
                        className={`${itemIndex === data.length && "text-accent"} 
                        relative flex items-center group hover:text-accent transition-all duration-300`}>
                        <div className="absolute -top-8 hidden xl:group-hover:flex">
                          <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                            <div className="text-[12px] leading-none font-semibold capitalize">
                              {data.name}
                            </div>
                            <div
                              className="border-solid border-l-white border-l-8 border-y-transparent 
                              border-y-[6px] border-r-0 absolute -bottom-2 rotate-90"
                            ></div>
                          </div>
                        </div>
                        <div className="text-2xl text-white">{data.icon}</div>
                      </div>
                    })}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
