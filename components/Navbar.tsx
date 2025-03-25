import React, { useEffect, useState } from "react";
import Image from "next/image";
import {assets} from "@/assets/assets";
import { useRef } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, SetIsScroll] = useState(false);
    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    };

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY>50){
          SetIsScroll(true);
        }else{
            SetIsScroll(false);
        }
      })  
    },[])

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="header_bg" className="w-full"/>
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 filetr shadow-sm dark:bg-[#11001F] dark:shadow-white/20": ""}` }>
        <a href="#top">
            <Image src={isDarkMode? assets.logo_dark1:assets.logo1} alt="logo" className="w-28 cursor-pointer mr-14"/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "": "bg-white shadow-sm  bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
            <li><a className="font-ovo" href="#top">Home</a></li>
            <li><a className="font-ovo" href="#about">About me</a></li>
            <li><a className="font-ovo" href="#services">Services</a></li>
            <li><a className="font-ovo" href="#work">My work</a></li>
            <li><a className="font-ovo" href="#contact">Contact me</a></li>
        </ul>
        <div className="flex items-center gap-4">
            <button onClick={()=> setIsDarkMode(prev => !prev)}><Image src={isDarkMode ? assets.sun_icon :assets.moon_icon} alt="dark" className="w-6 hover:cursor-pointer"/></button>
            <a className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50" href="#contact">Contact
            <Image src={isDarkMode? assets.arrow_icon_dark:assets.arrow_icon} alt="icon" className="w-3"/></a>
            <button className="block md:hidden ml-3" onClick={openMenu}><Image src={ isDarkMode? assets.menu_white:assets.menu_black} alt="menu" className="w-6 hover:cursor-pointer"/></button>
        </div>

        {/* mobile view */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 botton-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white">
            <div className="right-6 top-6 absolute" onClick={closeMenu}>
                <Image  src={isDarkMode? assets.close_white:assets.close_black} alt="close" className="w-5 cursor-pointer"/>
            </div>
            <li><a className="font-ovo" onClick={closeMenu} href="#top">Home</a></li>
            <li><a className="font-ovo" onClick={closeMenu} href="#about">About me</a></li>
            <li><a className="font-ovo" onClick={closeMenu} href="#services">Services</a></li>
            <li><a className="font-ovo" onClick={closeMenu} href="#work">My work</a></li>
            <li><a className="font-ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
