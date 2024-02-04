'use client'
import React, { useContext } from 'react';
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

const StyledAchievementCard = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary30,
  '&:hover': {
    backgroundColor: props.theme.primary50,
  },
}));

const AchieveCardContent = styled('div')``;

const AchieveCardDetails1 = styled('div')<{ theme: CustomTheme }>((props) => ({
  color: props.theme.tertiary,
}));

const AchieveCardDetails2 = styled('div')<{ theme: CustomTheme }>((props) => ({
  color: props.theme.primary,
}));

const AchieveCardField = styled('div')``;

function AchievementCard({ id, title, details, date, field, image }: AchievementCardProps) {
  const { theme } = useThemeContext();

  const useStyles = () => {
    return {
        achievementCard: {
            backgroundColor: theme.primary30,
            '&:hover': {
              backgroundColor: theme.primary50,
            },
          },
    }
  };

  const classes = useStyles();

  return (
    <Fade bottom>
      <StyledAchievementCard theme={theme} key={id} className={`achievement-card ${classes.achievementCard}`}>
        <AchieveCardContent>
          <AchieveCardDetails1 theme={theme}>
            <h2>{title}</h2>
            <p>{details}</p>
          </AchieveCardDetails1>
          <AchieveCardDetails2 theme={theme}>
            <h5>{date}</h5>
            <AchieveCardField>
              <AiOutlineFolder />
              <h5>{field}</h5>
            </AchieveCardField>
          </AchieveCardDetails2>
        </AchieveCardContent>
        <div className="achievecard-imgcontainer">
          <img src={image} alt="" />
        </div>
      </StyledAchievementCard>
    </Fade>
  );
}

export default AchievementCard;
