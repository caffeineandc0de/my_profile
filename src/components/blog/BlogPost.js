import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid2, Container } from '@mui/material';
import Style from './Blogs.module.scss';
import { Link } from 'react-router-dom';
const BlogPost = ({ id,image, title, description }) => {

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };
  const maxTitleLength = 30;
  const maxDescLength = 150;

  return (
    <Container>
      <Grid2 container spacing={4}>
        <Grid2 item xs={12} sm={6} md={4}>
        <Link to={`/blog/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card className={Style.blogCard}>
            <CardMedia
              component="img"
              alt="Blog Image"
              height="200"
              image={image}
              title="Blog Post Title"
              className={Style.blogImage}
            />
            <CardContent className={Style.blogContent}>
              <Typography gutterBottom variant="h5" component="div">
              {truncateText(title, maxTitleLength)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {truncateText(description, maxDescLength)}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default BlogPost;
