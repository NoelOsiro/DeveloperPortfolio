'use client'
import React from 'react';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { SingleProjectContainer } from './SingleProject.styles'; // Importing styled components
import placeholder from '../../../assets/png/placeholder.png';
import { CustomTheme } from '@mui/material/styles';

interface SingleProjectProps {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  code: string;
  demo: string;
  image: string;
  theme: CustomTheme;
}

const SingleProject: React.FC<SingleProjectProps> = ({ id, name, desc, tags, code, demo, image, theme }) => {
  return (
    <Fade bottom>
      <SingleProjectContainer theme={theme}>
        <div className='projectContent'>
          <h2 id={name.replace(' ', '-').toLowerCase()}>{name}</h2>
          {/* <img src={placeholder} alt={name} /> */}
          <div className='project--showcaseBtn'>
            <a href={demo} target='_blank' rel='noreferrer' className='iconBtn' aria-labelledby={`${name.replace(' ', '-')}-demo`}>
              <FaPlay id={`${name.replace(' ', '-')}-demo`} className='icon' aria-label='Demo' />
            </a>
            <a href={code} target='_blank' rel='noreferrer' className='iconBtn' aria-labelledby={`${name.replace(' ', '-')}-code`}>
              <FaCode id={`${name.replace(' ', '-')}-code`} className='icon' aria-label='Code' />
            </a>
          </div>
        </div>
        <p className='project--desc'>{desc}</p>
        <div className='project--lang'>
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </SingleProjectContainer>
    </Fade>
  );
};

export default SingleProject;
