import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <h5>There are {blogs.length} blogs in this site.</h5>
            {
                blogs.map(blog => <BlogCard
                    key={blog.id}
                    blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Blog;