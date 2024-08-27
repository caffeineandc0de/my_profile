import React from 'react';
import { Box } from "@mui/material";

export default function Blog({ innerRef }) {
    return (

        <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'blog'}>
            <Box>
                <h1>Coming Soon!</h1>
            </Box>
        </Box>
    );
};