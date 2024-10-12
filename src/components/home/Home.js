import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ innerRef }) {

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
         <Box flexBasis={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={{ xs: 'column', md: 'row' }}>
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me}
               width={{ xs: '30vw', md: '50%' }}
               height={{ xs: '45vw', md: '60%' }}
               borderRadius={'20px'} p={'0.75rem'} />
            <Box marginTop={{ xs: '1rem', md: '2rem' }}
               marginLeft={{ xs: '0.5rem', md: '1rem' }} display={'flex'} gap={'.75rem'}
               flexDirection={{ xs: 'row', md: 'column' }}  
               justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>

         </Box>

         <Box flexBasis={'50%'} display={'flex'} flexDirection={'column'} alignItems={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'left' }}>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}
