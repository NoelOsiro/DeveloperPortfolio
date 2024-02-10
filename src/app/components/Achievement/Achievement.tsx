'use client'
import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../../data/achievementData';
import AchievementCard from './AchievementCard';
import { CustomTheme, styled } from '@mui/material/styles';

const AchievementContainer = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  backgroundColor: theme.secondary,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '3rem',
})
);

const AchievementBody = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  color: theme.primary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
  flex: '0.4',
  width: '90%',
  '@media (min-width: 992px) and (max-width: 1380px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flex: '0.3',
    width: '90%'
  }
})
);

const AchievementTitle = styled('h1')(({ theme }: { theme: CustomTheme }) => ({
  color: theme.primary,
  fontFamily: 'var(--primaryFont)',
  fontSize: '3.5rem',
  marginBottom: '1.5rem',
})
);

const AchievementBio = styled('h4')(({ theme }: { theme: CustomTheme }) => ({
  color: theme.tertiary,
  fontSize: '1.75rem',
  fontFamily: 'Caveat, cursive',
  fontWeight: '400',
})
);

const AchievementCardsContainer = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginLeft: '5%',
  width: '100%',
  flex: '0.6',
})
);

function Achievement() {
  const { theme } = useThemeContext();

  return (
    <>
      {achievementData.achievements.length > 0 && (
        <AchievementContainer theme={theme} id="achievement">
          <AchievementBody theme={theme}>
            <AchievementTitle theme={theme}>Achievements</AchievementTitle>
            <AchievementBio theme={theme}>{achievementData.bio}</AchievementBio>
          </AchievementBody>
          <AchievementCardsContainer theme={theme}>
            {achievementData.achievements.map((achieve) => (
              <AchievementCard
                key={achieve.id}
                id={String(achieve.id)}
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
                field={achieve.field}
                image={achieve.image}
              />
            ))}
          </AchievementCardsContainer>
        </AchievementContainer>
      )}
    </>
  );
}

export default Achievement;
