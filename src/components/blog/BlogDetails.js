// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from './Blogs.json'; 
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ReactDesignPattern from '../../img/ReactDesignPattern.png';
import useHook from '../../img/ReactUseHook.png';
import Style from './Blogs.module.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const images = {
    ReactDesignPattern,
    useHook,
};

const BlogDetail = () => {
    const { id } = useParams(); 
    const blogPost = blogData.blogs[id]; 

    // Filter out the current blog post from the list
    const relatedBlogs = blogData.blogs.filter((_, index) => index !== parseInt(id));

    const settings = {
        dots: true,
        infinite: relatedBlogs.length > 1, // Only allow infinite scroll if there are multiple blogs
        speed: 500,
        slidesToShow: relatedBlogs.length < 3 ? relatedBlogs.length : 3, // Adjust slides based on the number of blogs
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={Style.blogdetail}>
            <Card >
                <CardMedia
                    component="img"
                    alt={blogPost.title}
                    height="400"
                    image={images[blogPost.image.split('/').pop()]} 
                    title={blogPost.title}
                />
                <CardContent>
                    <Typography variant="h4" component="div">
                        {blogPost.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {blogPost.description}
                    </Typography>
                    {blogPost.sections.map((section, index) => (
                        <div key={index}>
                            <Typography variant="h6">{section.heading}</Typography>
                            <Typography variant="body2">{section.content}</Typography>
                            <div className={Style.codeBlock}>
                                <pre>{section.example}</pre>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                {section.benefits}
                            </Typography>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {relatedBlogs.length > 0 && (
                <>
                    <Typography variant="h5" component="h2" style={{ marginTop: '20px', marginBottom: '20px' }}>
                        Related Blogs
                    </Typography>
                    <Slider {...settings}>
                        {relatedBlogs.map((post, index) => (
                            <div key={index}>
                                 <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card style={{ maxWidth: '300px', margin: '0 auto' }}>
                                    <CardMedia
                                        component="img"
                                        alt={post.title}
                                        height="200"
                                        image={images[post.image.split('/').pop()]} 
                                        title={post.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </>
            )}
        </div>
    );
};

export default BlogDetail;
