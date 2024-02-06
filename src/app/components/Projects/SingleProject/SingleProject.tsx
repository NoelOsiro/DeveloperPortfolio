'use client'
import React from 'react';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { CustomTheme } from '@mui/material/styles';
import { ProjectContentImg, ProjectDesc, ProjectLang, ProjectLangSpan, ProjectShowcaseBtnLink, SingleProjectContainer, SingleProjectContent, SingleProjectContentH2, SingleProjectShowcaseBtn } from './SingleProject.styles';

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
      <SingleProjectContainer theme={theme} >
        <SingleProjectContent theme={theme}>
          <SingleProjectContentH2 theme={theme} id={name.replace(' ', '-').toLowerCase()}>{name}</SingleProjectContentH2>
          <ProjectContentImg theme={theme} src={image} alt={name} className='project--image' />
          <SingleProjectShowcaseBtn theme={theme}>
            <ProjectShowcaseBtnLink href={demo} target='_blank' rel='noreferrer' className='iconBtn' aria-labelledby={`${name.replace(' ', '-')}-demo`} theme={theme}>
              <FaPlay id={`${name.replace(' ', '-')}-demo`} className='icon' aria-label='Demo' />
            </ProjectShowcaseBtnLink>
            <ProjectShowcaseBtnLink href={code} target='_blank' rel='noreferrer' className='iconBtn' aria-labelledby={`${name.replace(' ', '-')}-code`} theme={theme}>
              <FaCode id={`${name.replace(' ', '-')}-code`} className='icon' aria-label='Code' />
            </ProjectShowcaseBtnLink>
          </SingleProjectShowcaseBtn>
        </SingleProjectContent>
        <ProjectDesc className='project--desc' theme={theme}>{desc}</ProjectDesc >
        <ProjectLang theme={theme}>
          {tags.map((tag, id) => (
            <ProjectLangSpan key={id} theme={theme}>{tag}</ProjectLangSpan>
          ))}
        </ProjectLang>
      </SingleProjectContainer>
    </Fade>
  );
};

export default SingleProject;
