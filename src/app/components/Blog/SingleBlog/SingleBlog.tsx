'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';
import placeholder from '/public/assets/png/placeholder.png';
import { CustomTheme, styled } from '@mui/material/styles';
import Image from 'next/image';
import './SingleBlog.css'

interface SingleBlogProps {
  theme: CustomTheme;
  title: string;
  desc: string;
  date: string;
  image: string;
  url: string;
  id: string;
}

const SingleBlogLink = styled('a')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary400,
}));

const SingleBlogImage = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
}));

const SingleBlogBody = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary400,
}));
const SingleDate = styled('p')<{ theme: CustomTheme }>((props) => ({
    color: props.theme.tertiary ,
  }));
  const SingleTitle = styled('h3')<{ theme: CustomTheme }>((props) => ({
    color: props.theme.secondary ,
  }));
  const SingleDescription = styled('h6')<{ theme: CustomTheme }>((props) => ({
    color: props.theme.secondary ,
  }));

function SingleBlog({ theme, title, desc, date, image, url, id }: SingleBlogProps) {
  return (
    <Fade bottom>
      <SingleBlogLink
        key={id}
        href={url}
        target="_blank"
        rel="noreferrer"
        theme={theme}
        className="singleBlog"
      >
        <SingleBlogImage theme={theme} className="singleBlog--image">
          <img src={image ? image : placeholder} alt={title} />
        </SingleBlogImage>
        <SingleBlogBody theme={theme} className="singleBlog--body">
          <SingleDate theme={theme}>{date}</SingleDate>
          <SingleTitle theme={theme}>{title}</SingleTitle>
          <SingleDescription theme={theme}>{desc}</SingleDescription>
        </SingleBlogBody>
      </SingleBlogLink>
    </Fade>
  );
}

export default SingleBlog;
