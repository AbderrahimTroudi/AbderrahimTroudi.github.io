'use client';

import { motion } from 'framer-motion';
import { VerticalCommonVariants } from '@/utils/framerVariants';

const About = () => {
  const verticalSkills = VerticalCommonVariants(60);

  return (
    <motion.section
      className="lg:flex items-center justify-between w-full gap-10 lg:py-20 py-10"
      id="about"
      initial="hidden"
      whileInView="shown"
      viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
      variants={verticalSkills}
    >
      <div className="flex flex-col dark:text-white text-black">
        <h1 className="heading lg:flex justify-start">
          About&nbsp;
          <span className="text-purple">Me</span>
        </h1>

        <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-12 text-center lg:text-left">
          Junior Web Developer at Fouita.<br /> Proven ability in both Front end and Back end development for enterprise-level
          web applications.<br /> Passionate about technology and building scalable web solutions.<br /> I am thrilled to
          continue sharpening my skills and gaining further experience in the dynamic field of web development.
        </p>
      </div>

      <div className='lg:block hidden'>
        <img src="/about-dark.svg" className="dark:flex hidden" width={700} />
        <img src="/about-light.svg" className="flex dark:hidden" width={700} />
      </div>
    </motion.section>
  );
};

export default About;
