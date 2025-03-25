import { assets, serviceData } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

interface ServicesProps {
  isDarkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
  return (
    <motion.div 
    initial ={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}} 
    id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
      initial ={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.3}} 
      className="text-center mb-2 text-lg font-ovo">What I offer</motion.h4>
      <motion.h2 
      initial ={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.5}} 
      className="text-center text-5xl font-ovo">My services</motion.h2>

      <motion.p 
      initial ={{opacity:0,}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}} 
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Passionate about creating innovative digital experiences, I offer expertise in web design, UI/UX design, and graphics design. With a strong foundation in modern technologies like React.js, Node.js, and PostgreSQL, I develop dynamic and user-friendly applications. My experience in crafting intuitive user interfaces and engaging visuals ensures seamless user experiences. Let’s build something exceptional together!</motion.p>
      <motion.div 
      initial ={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6, delay:0.9}} 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div 
          whileHover={{scale:1.05}}
          key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0px_#000] cursor-pointer dark:hover:bg-[#2a004a] dark:hover:shadow-white'>
            <Image src={icon} alt='Icon' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/58'>{description}</p>
            {/* <a className="flex items-center gap-2 text-sm mt-5" href={link}>
              Read more <Image src={assets.right_arrow} className='w-4' alt="read more" />
            </a> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
