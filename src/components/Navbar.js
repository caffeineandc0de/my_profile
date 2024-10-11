import React from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
// import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import SD from "../img/SDback.png";
import SDB from "../img/SDBback.png";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'About',
        to: 'about',
        active: 'about'
    },
    {
        name: 'blog',
        to: 'blog',
        active: 'blog'
    },
    {
        name: 'SD',
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'portfolio',
        to: 'portfolio',
        active: 'portfolio'
    },
    {
        name: 'resume',
        to: 'resume',
        active: 'resume'
    },
]

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

export default function Navbar({ darkMode, handleClick, active, setActive }) {

    return (
        <Box component={'nav'} width={'100%'} position={singlePage ? 'fixed' : 'relative'} className={darkMode ? Style.dark : Style.light}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '10rem' }}
                textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={singlePage ? `#${link.to}` : `/${link.to}`} scroll={el => scrollWidthOffset(el)} smooth onClick={() => setActive(link.active)} className={`${Style.link}`}>
                            {!link.type ? (
                                <p className={Style.link}>{link.name}</p>
                            ) : (
                                <h1 className={Style.link}>
                                    <img src={darkMode ? SD : SDB} alt="logo" className={Style.logo} />
                                </h1>
                            )}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    )
}
