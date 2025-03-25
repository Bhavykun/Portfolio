import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode? assets.logo_dark1:assets.logo1} alt="logo" className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode? assets.mail_icon_dark:assets.mail_icon} alt="mailicon" className='w-6'/>
        indigo57703@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className='text-sm md:text-md'>© 2025 Bhavykun. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target="_blank" href="https://github.com/Bhavykun">GitHub</a></li>
            <li></li>
            <li><a target="_blank" href="www.linkedin.com/in/sirasanagandla-bhavyesh-6707b526a">LinkedIn</a></li>
            <li></li>
            <li><a target="_blank" href="https://www.instagram.com/bhavykun/">Instagram</a></li>
            <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
