import React from 'react';
import { Box, Container, Grid2} from "@mui/material";
import blogData from './Blogs.json';
import ReactDesignPattern from '../../img/ReactDesignPattern.png';
import useHook from '../../img/ReactUseHook.png';
import BlogPost from './BlogPost';

const images = {
    ReactDesignPattern,
    useHook,
};

export default function Blog({ innerRef }) {
    return (
        <Box
            ref={innerRef}
            component={'main'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={'calc(100vh - 175px)'}
            id={'blog'}
        >
            <Container>
                <Grid2 container spacing={4}>
                    {blogData.blogs.map((post, index) => (
                        <Grid2 item key={index} xs={12} sm={6} md={4}>
                            <BlogPost id={post.id} title= {post.title} image={images[post.image]} description= {post.description}/>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
