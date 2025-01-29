import React from 'react'
import { Spotlight } from './ui/Spotlight'
import BackgroundAnimation  from "./ui/Bg-hero-animation"
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='' id='#'>
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="#6b7280"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            
            <div className='relative flex flex-col items-center justify-center lg:min-h-screen py-24 xl:py-32 2xl:py-0 '>
            

                <div className='absolute flex justify-center z-10 w-full'>
                    <div className='w-full flex flex-col items-center justify-center space-y-4'>
                        <img src="/img-profile.png" alt="Profile picture of Abderrahim" className="ring-4 dark:ring-gray-500/20 dark:bg-black-100 bg-white ring-gray-200 rounded-full w-[200px] mb-10" />

                        <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Turning Ideas Into Seamless Digital Experiences' />

                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            Hi, I&apos;m <span className='text-purple font-semibold'>Abderrahim</span>, a Full Stack Developer.
                        </p>

                        {/* Social Media */}
                        <div >
                            <div className="flex flex-wrap gap-4 mt-6">
                            <a href="linkedin.com/in/troudi-abderrahim-60a001237/" target="_blank" rel="noreferrer" className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300">
                                <FaLinkedin />
                            </a>
                            
                            <a href="github.com/AbderrahimTroudi" target="_blank" rel="noreferrer" className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300">
                                <FaGithub />
                            </a>
                            <a href="https://twitter.com/your-profile" target="_blank" rel="noreferrer" className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300">
                                <FaTwitter />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100006147826386" target="_blank" rel="noreferrer" className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/abderrahimtroudi/" target="_blank" rel="noreferrer" className="bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 p-4 rounded-full text-purple text-xl hover:bg-gray-300">
                                <FaInstagram />
                            </a>
                            </div>
                            
                        </div>

                        <a className='w-fit' href="https://drive.google.com/file/d/1Vvq4-l4-AwSmD2bPOYjPQz0JULu7lXDZ/view?usp=sharing" target='_blank'>
                            <MagicButton title='View Resume' position='right' otherClasses='md:w-60' />
                        </a>
                    </div>
                    
                </div>

                <BackgroundAnimation />
            </div>
            
        </div>
    )
}

export default Hero