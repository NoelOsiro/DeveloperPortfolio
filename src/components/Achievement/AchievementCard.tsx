import React from 'react';
import Fade from 'react-reveal/Fade';
import Image from 'next/image'
import { AiOutlineFolder } from 'react-icons/ai';
import { useThemeContext } from '../../contexts/ThemeContext';
import { CustomTheme, styled } from '@mui/material/styles';

interface AchievementCardProps {
  id: string;
  title: string;
  details: string;
  date: string;
  field: string;
  image: string;
}

const StyledAchievementCard = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  backgroundColor: theme.primary30,
  '&:hover': { backgroundColor: theme.primary50,},
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  height: 'auto',
  padding: '1.5rem',
  borderRadius: '20px',
  marginBottom: '1.5rem',
  marginLeft: '1.5rem',
  transition: 'background-color 200ms ease-in-out',
  width: '100%',
  position: 'relative',
  '@media (min-width: 992px) and (max-width: 1380px)':{
    justifyContent: 'flex-start',
  }
}));

const AchieveCardContent = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  width: '65%',
}));

const AchieveCardDetails1 = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  color: theme.primary,
  '& h2': {
    fontFamily: 'var(--primaryFont)',
    fontWeight: '500',
    fontSize: '1.225rem',
    lineHeight: '110%',
    marginBottom: '6px',
  },
  '& p': {
    fontSize: '1.10rem',
    fontFamily: 'Roboto',
    color: theme.tertiary80,
    fontWeight: 400,
    marginBottom: '6px',
  },
}));

const AchieveCardDetails2 = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  color: theme.primary,
  display: 'flex',
  flexDirection: 'row',
  width: '50%',
  alignItems: 'center',
  fontFamily: 'var(--primaryFont)',
  fontSize: '18px',
  position: 'absolute',
  bottom: '7px',
  left: '25px',
}));

const AchieveCardField = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '& svg': {
    marginLeft: '6px',
    marginRight: '6px',
  },
}));
const ImageContainer = styled('div')(() => ({
  width: '23%',
  '& img': {
    width: '150px',
    height: '130px',
    borderRadius: '10px',
  },
}));

function AchievementCard({ id, title, details, date, field, image }: AchievementCardProps) {
  const { theme } = useThemeContext();

  return (
    <Fade bottom style={{width: '-webkit-fill-available'}}>
      <StyledAchievementCard theme={theme} key={id}>
        <AchieveCardContent theme={theme}>
          <AchieveCardDetails1 theme={theme}>
            <h2 className='w-1/2'>{title}</h2>
            <p>{details}</p>
          </AchieveCardDetails1>
          <AchieveCardDetails2 theme={theme}>
            <h5 className='w-1/2'>{date}</h5>
            <AchieveCardField theme={theme} className='w-1/2 flex flex-row'>
              <AiOutlineFolder />
              <h5>{field}</h5>
            </AchieveCardField>
          </AchieveCardDetails2>
        </AchieveCardContent>
        <ImageContainer>
          <img src={image} alt=""/>
        </ImageContainer>
      </StyledAchievementCard>
    </Fade>
  );
}

export default AchievementCard;
