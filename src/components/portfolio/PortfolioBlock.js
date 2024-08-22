import React from 'react';
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image,title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
      </Box>
   );
}

export default PortfolioBlock;