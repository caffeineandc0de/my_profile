import React from 'react';
import { Box, useMediaQuery, useTheme } from "@mui/material";
import IconLink from "./IconLink";

function PortfolioBlock(props) {
   const { image, title, live } = props;
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
   const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

   // Function to apply responsive styles based on screen size
   const getButtonStyles = () => {
      if (isSmallScreen) {
         return {
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '15px',
         };
      } else if (isMediumScreen) {
         return {
            padding: '0.8rem',
            fontSize: '1.2rem',
            borderRadius: '20px',
         };
      } else {
         return {
            padding: '1rem',
            fontSize: '1.5rem',
            borderRadius: '25px',
         };
      }
   };

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box 
               p={1} 
               border={'2px solid black'} 
               borderRadius={getButtonStyles().borderRadius} 
               style={getButtonStyles()} // Applying responsive styles
            >
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
