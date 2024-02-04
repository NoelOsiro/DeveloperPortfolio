'use client'
import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../../data/achievementData';
import AchievementCard from './AchievementCard';
import { CustomTheme, styled } from '@mui/material/styles';

const AchievementContainer = styled('div')(({ theme }: { theme: CustomTheme }) => ({
    backgroundColor: theme.secondary,
  })
);

const AchievementBody = styled('div')(({ theme }: { theme: CustomTheme }) => ({
    color: theme.primary,
  })
);

const AchievementTitle = styled('h1')(({ theme }: { theme: CustomTheme }) => ({
    color: theme.primary,
  })
);

const AchievementBio = styled('h4')(({ theme }: { theme: CustomTheme }) => ({
    color: theme.tertiary,
  })
);

const AchievementCardsContainer = styled('div')(({ theme }: { theme: CustomTheme }) => ({})
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
