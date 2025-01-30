'use client';

import { motion } from 'framer-motion';
import { FaLocationArrow } from 'react-icons/fa';
import { projects } from '@/data';
import { VerticalCommonVariants } from '@/utils/framerVariants';

const RecentProjects = () => {
  const verticalProjects = VerticalCommonVariants(60); // Applying same vertical animation


  return (
    <motion.section
      className="lg:py-20 py-10 w-full"
      id="projects"
      initial="hidden"
      whileInView="shown"
      viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
      variants={verticalProjects} // Animation applied to the entire section
    >
      <h1 className="heading">
        A small selection of{' '}
        <span className="text-purple">recent projects</span>
      </h1>

      <motion.div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-10 mt-12 w-full">
        {projects.map(({ id, title, des, img, link, skills }) => (
          <motion.div
            key={id}
            initial="hidden"
            whileInView="shown"
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            variants={verticalProjects} // Apply the same animation to each card
            className="h-full rounded-3xl bg-gray-400/20 shadow-md overflow-hidden"
          >
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${img})`, height: '300px' }}
            ></div>

            <div className="p-10">
              <h1 className="text-start text-xl md:text-2xl font-bold">{title}</h1>

              <p className="text-gray-700 dark:text-white mt-2 text-start">{skills}</p>

              <p className="dark:text-white-100 text-black-200 mt-3 font-semibold">{des}</p>

              {/* <div className="flex items-center mt-7">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  <a href={link} target="_blank" rel="noreferrer noopener">
                    Github
                  </a>
                </p>
                <FaLocationArrow className="ms-3 text-purple" />
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default RecentProjects;
