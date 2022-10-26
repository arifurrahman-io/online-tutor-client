import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';
import './Blog.css'
import { Container } from 'react-bootstrap';

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <Container>
            <h5 className='text-center mt-3'>There are <span className='text-info'>{blogs.length} blogs</span> in this site.</h5>
            <div className='blog-card'>
                {
                    blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}></BlogCard>)
                }
            </div>
        </Container>
    );
};

export default Blog;