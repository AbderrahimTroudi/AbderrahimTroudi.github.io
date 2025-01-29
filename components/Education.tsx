'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/MovingBorders';
import { education } from '@/data';
import { VerticalCommonVariants } from '@/utils/framerVariants';

const Experience = () => {
  const verticalEducation = VerticalCommonVariants(60); // You can adjust the animation here



  return (
    <motion.section
      className="lg:py-20 py-10 flex flex-col items-center"
      id="education"
    >
      <h1 className="heading">
        My
        <span className="text-purple"> Education</span>
      </h1>

      <motion.div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {education.map((card) => (
          <motion.div
            key={card.id}
            className='w-full'
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="2rem"
              className="dark:text-white text-black-100 border-neutral-200 dark:border-slate-800 w-full"
            >
              <div className="flex p-10 gap-4 w-full">
                <div className='w-full'>
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-sm md:text-base text-gray-700 dark:text-white mt-2 font-medium">
                    {card.date}
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
