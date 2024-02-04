'use client'
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
}));

const ServiceContent = styled('div')<{ theme: CustomTheme }>((props) => ({
  color: props.theme.tertiary,
}));

const ServiceIcon = styled('i')``;

function SingleService({ id, title, icon }: SingleServiceProps) {
  const { theme } = useThemeContext();

  return (
    <Fade bottom>
      <StyledSingleService theme={theme} key={id} className="single-service">
        <ServiceContent theme={theme}>
          <ServiceIcon className="service-icon">{icon}</ServiceIcon>
          <h4>{title}</h4>
        </ServiceContent>
      </StyledSingleService>
    </Fade>
  );
}

export default SingleService;
