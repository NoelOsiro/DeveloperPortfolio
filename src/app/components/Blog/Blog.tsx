'use client'
import React from 'react';
import './Blog.css';
import { HiArrowRight } from 'react-icons/hi';
import { useThemeContext } from '../../contexts/ThemeContext';
import { CustomTheme, styled } from '@mui/material/styles';
import { blogData } from '../../../data/blogData';
import SingleBlog from './SingleBlog/SingleBlog';
import Link from 'next/link';



const BlogContainer = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
}));

const BlogHeader = styled('div')<{ theme: CustomTheme }>((props) => ({
  color: props.theme.primary,
}));

const BlogBody = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
}));

const BlogBodyContainer = styled('div')``;

const BlogViewAll = styled('div')<{ theme: CustomTheme }>((props) => ({}));

const ViewAllButton = styled('button')<{ theme: CustomTheme }>((props) => ({
  color: props.theme.tertiary,
  backgroundColor: props.theme.primary,
  '&:hover': {
    color: props.theme.secondary,
    backgroundColor: props.theme.primary,
  },
}));

const ViewAllArrow = styled(HiArrowRight)<{ theme: CustomTheme }>((props) => ({
  color: props.theme.tertiary,
  backgroundColor: props.theme.secondary70,
  width: '40px',
  height: '40px',
  padding: '0.5rem',
  fontSize: '1.05rem',
  borderRadius: '50%',
  cursor: 'pointer',
  '&:hover': {
    color: props.theme.tertiary,
    backgroundColor: props.theme.secondary,
  },
}));

function Blog() {
    const { theme } = useThemeContext();

  return (
    <>
      {blogData.length > 0 && (
        <BlogContainer theme={theme} className="blog" id="blog">
          <BlogHeader theme={theme} className="blog--header">
            <h1>Blog</h1>
          </BlogHeader>
          <BlogBody theme={theme} className="blog--body">
            <BlogBodyContainer className="blog--bodyContainer">
              {blogData.slice(0, 3).reverse().map((blog) => (
                <SingleBlog
                  theme={theme}
                  title={blog.title}
                  desc={blog.description}
                  date={blog.date}
                  image={blog.image}
                  url={blog.url}
                  key={blog.id}
                  id={String(blog.id)}
                />
              ))}
            </BlogBodyContainer>

            {blogData.length > 3 && (
              <BlogViewAll className="blog--viewAll" theme={theme}>
                <Link href="/blog">
                  <ViewAllButton theme={theme} >
                    View All
                    <ViewAllArrow theme={theme} />
                  </ViewAllButton>
                </Link>
              </BlogViewAll>
            )}
          </BlogBody>
        </BlogContainer>
      )}
    </>
  );
}

export default Blog;
