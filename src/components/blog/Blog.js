import React from 'react';
import { Box, Grid, Typography } from "@mui/material";

export default function Blog({ innerRef }) {
    return (
        <Box id={'blog'} ref={innerRef} style={{padding:'15rem'}}>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Typography>
                        Coming Soon!
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
};