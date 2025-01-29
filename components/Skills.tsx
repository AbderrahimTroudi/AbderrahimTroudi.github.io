'use client';

import { useState, useEffect } from 'react';
import useScreenSizes from '@/hooks/useWindowSize';
import { useAnimation, motion } from 'framer-motion';
import { SmotionDiv } from '@/libs/framer-motion';
import { skills } from '@/data/index';
import { VerticalCommonVariants } from '@/utils/framerVariants';

const Stats = () => {
  const shakingAnimation = useAnimation();
  const [isSmall, isMedium] = useScreenSizes();
  const verticalSkills = VerticalCommonVariants(60);
  const [SkillsList, setSkillsList] = useState(skills);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newSkillList = SkillsList.map((tech) => ({
        ...tech,
        shouldShake: Math.random() < 0.5,
      }));
      setSkillsList(newSkillList);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [SkillsList]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await shakingAnimation.start({
        rotate: isMedium
          ? [0, 90, -90, 60, -60, 30, -30, 0]
          : [0, 190, -190, 160, -160, 130, -130, 0],
        transition: { duration: 0.5, delay: 3 },
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [shakingAnimation, isMedium]);


  return (
    <motion.section
      className="flex justify-center items-center lg:py-20 py-10"
      id="skills"
      initial="hidden"
      whileInView="shown"
      viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
      variants={verticalSkills}
    >
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="heading">
          My
          <span className="text-purple">{' '}Skills</span>
        </h1>

        <SmotionDiv
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {SkillsList.slice(0, 18).map((tech, key) => (
            <motion.div
              key={key}
              className="flex flex-col items-center cursor-pointer bg-gray-400/20 border rounded-2xl shadow-md p-4 w-28 h-28 sm:w-32 sm:h-32"
            >
              <motion.img
                animate={tech.shouldShake ? shakingAnimation : ''}
                src={`/tech_logos/${tech.technology.toLowerCase()}.svg`}
                alt={`${tech.technology}-logo`}
                className="w-12 h-12 sm:w-16 sm:h-16 transition duration-300 select-none"
              />
              <span className="text-sm sm:text-base mt-2 dark:text-white text-black font-medium text-center">
                {tech.technology}
              </span>
            </motion.div>
          ))}
        </SmotionDiv>
      </div>
    </motion.section>
  );
};

export default Stats;
