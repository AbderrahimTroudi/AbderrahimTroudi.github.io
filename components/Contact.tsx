'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import { VerticalCommonVariants } from '@/utils/framerVariants';

const Contact = () => {
  const verticalContact = VerticalCommonVariants(60); // Applying same vertical animation

  return (
    <motion.section
      className="lg:py-20 py-10"
      id="contact"
      initial="hidden"
      whileInView="shown"
      viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
      variants={verticalContact} // Animation applied to the entire section
    >
     

      <motion.div className="w-full lg:flex items-center justify-center mt-12 gap-12">
        {/* Contact Details */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-6 py-8"
          initial="hidden"
          whileInView="shown"
          viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
          variants={verticalContact} // Apply the same animation to this section
        >
             <h1 className="heading">
        Get in{' '}
        <span className="text-purple">Touch</span>
      </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-8 max-w-lg">
            Feel free to reach out to me for collaborations, opportunities, or just to say hello!
          </p>
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 dark:bg-slate-900 p-4 rounded-full text-purple text-xl">
              <FaEnvelope />
            </div>
            <span className="dark:text-gray-300 text-gray-600">
              <a href="mailto:abderrahimtroudi222@gmail.com" className="hover:underline">
                abderrahimtroudi222@gmail.com
              </a>
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 dark:bg-slate-900 p-4 rounded-full text-purple text-xl">
              <FaPhone />
            </div>
            <span className="dark:text-gray-300 text-gray-600">
              <a href="tel:+21628473413" className="hover:underline">+216 28 473 413</a>
            </span>
          </div>

          {/* Social Media */}
          <div className="flex flex-wrap gap-4">
            <a
              href="linkedin.com/in/troudi-abderrahim-60a001237/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="github.com/AbderrahimTroudi"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006147826386"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/abderrahimtroudi/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="shown"
          viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
          variants={verticalContact} // Apply the same animation to the form
        >
          {/* Name Field */}
          <div className="mb-6">
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md bg-gray-400/20 p-3 text-sm dark:text-white outline-none"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md bg-gray-400/20 p-3 text-sm dark:text-white outline-none"
              placeholder="Your email address"
            />
          </div>

          {/* Message Field */}
          <div className="">
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 block w-full rounded-md bg-gray-400/20 p-3 text-sm dark:text-white outline-none"
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <a href="mailto:nirban256@gmail.com" className="w-full">
            <MagicButton title="Let's get in touch" position="right" />
          </a>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
