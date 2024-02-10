// 'use client' is omitted as it seems to be a comment.

import React from 'react';
import Fade from 'react-reveal/Fade';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { CustomTheme, styled } from '@mui/material/styles';

interface SingleServiceProps {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const StyledSingleService = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary400,
  boxShadow: '4px 4px 8px rgba(36, 3, 3, 0.2)',
  width: '180px',
  height: '180px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.4rem 1.4rem',
  transition: 'transform 300ms ease-in-out',

  '&:hover': {
    transform: 'scale(1.15)',
    '& .service-icon svg': {
      animation: 'magic 0.7s ease-in-out both',
    },
  },

  '@media screen and (max-width: 800px)': {
    width: '160px',
    height: '160px',
    padding: '1.2rem 1.2rem',
  },

  '@media screen and (max-width: 600px)': {
    width: '150px',
    height: '150px',
    padding: '1.2rem 1.2rem',
  },
}));

const ServiceContent = styled('div')<{ theme: CustomTheme }>((props) => ({
  position: 'relative',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  '& h4': {
    marginTop: '5rem',
  },
}));

const ServiceIcon = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  position: 'absolute',
  top: '15%',
  '& svg': {
    fontSize: '2.8rem',
    color: theme.tertiary,
  },

  '@media screen and (max-width: 800px)': {
    '& svg': {
      fontSize: '2.5rem',
    },
  },

  '@media screen and (max-width: 600px)': {
    '& svg': {
      fontSize: '2.2rem',
    },
  },
}));

const SingleService: React.FC<SingleServiceProps> = ({ id, title, icon }) => {
  const { theme } = useThemeContext();

  return (
    <Fade bottom>
      <StyledSingleService theme={theme} key={id} className="single-service">
        <ServiceContent theme={theme}>
          <ServiceIcon theme={theme} className="service-icon">{icon}</ServiceIcon>
          <h4>{title}</h4>
        </ServiceContent>
      </StyledSingleService>
    </Fade>
  );
};

export default SingleService;
