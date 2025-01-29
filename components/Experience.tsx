'use client';

import { motion } from 'framer-motion';
import { workExperience } from '@/data';
import { Button } from './ui/MovingBorders';
import { VerticalCommonVariants } from '@/utils/framerVariants';

const Experience = () => {
  const verticalExperience = VerticalCommonVariants(60); // Same animation as before



  return (
    <motion.section
      className="lg:py-20 py-10 flex flex-col justify-center items-center"
      id="experience"
    >
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>

      <motion.div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <motion.div
          className='w-full'
            key={card.id}
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="2rem"
              className="flex-1 dark:text-white text-black-100 border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-10 gap-4">
                <div>
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>

                  <p className="text-start text-sm md:text-base text-gray-700 dark:text-white mt-2 font-medium">
                    {card.company} | {card.date}
                  </p>

                  <p className="text-gray-700 dark:text-white mt-2 text-start">
                    {card.skills}
                  </p>

                  <p className="text-start dark:text-white-100 text-black-200 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
