import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};