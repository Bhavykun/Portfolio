import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import docker from "./docker.png";
import postgre from "./postgre.png";
import postman from "./postman.png";
import canva from "./canva.png";
import logo1 from "./logo1.png";
import logo_dark1 from "./logo_dark1.png";

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    docker,
    postgre,
    postman,
    canva,
    logo1,
    logo_dark1
};

export const workData = [
    {
        title: 'Custom Blog',
        description: 'Full-Stack application',
        bgImage: '/work-5.png',
        link: 'https://github.com/Bhavykun/customblog'
    },
    {
        title: 'To-do-list',
        description: 'CRUD functional application',
        bgImage: '/work-6.jpeg',
        link: 'https://github.com/Bhavykun/To-do-list'
    },
    {
        title: 'KeepApp',
        description: 'DApp based on blockchain',
        bgImage: '/work-7.jpg',
        link: 'https://github.com/Bhavykun/KeepApp-Web-3.0-'
    },
    {
        title: 'Spaime',
        description: 'TC & SC web application',
        bgImage: '/work-8.png',
        link: 'https://github.com/Bhavykun/Spaime'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Crafting responsive and dynamic websites using modern technologies for seamless user experiences.', link: '' },
    // { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'Designing intuitive and user-friendly interfaces that enhance engagement and usability.', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creating visually compelling designs that effectively communicate ideas and captivate audiences.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, C++' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in ECE with Minor in AIML' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Worked on diverse full-stack projects using modern technologies.' }
];

export const toolsData = [
    assets.vscode, assets.postgre, assets.mongodb, assets.canva, assets.git, assets.docker, assets.postman
];