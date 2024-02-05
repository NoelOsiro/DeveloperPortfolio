'use client'
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext, useThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '/public/assets/svg/experience/expImgWhite.svg'
import expImgBlack from '/public/assets/svg/experience/expImgBlack.svg'

import './Experience.css'
import { CustomTheme, styled } from '@mui/material/styles';

interface SingleBlogProps {
    company: string;
    jobtitle: string;
    startYear: string;
    endYear: string;
    id: string;
  }
function ExperienceCard({id, company, jobtitle, startYear, endYear}:SingleBlogProps) {

    const { theme } = useThemeContext();
    const imageSource = theme.type === 'light' ? '/assets/svg/experience/expImgBlack.svg' : '/assets/svg/experience/expImgWhite.svg'
    const SingleDate = styled('h6')<{ theme: CustomTheme }>((props) => ({
        color: props.theme.primary,
    }));
    const SingleTitle = styled('h4')<{ theme: CustomTheme }>((props) => ({
        color: props.theme.tertiary,
    }));
    const SingleDescription = styled('h6')<{ theme: CustomTheme }>((props) => ({
        color: props.theme.tertiary80,
    }));
    const useStyles = () => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    });

    const classes = useStyles();
    const SingleExpCard = styled('div')<{ theme: CustomTheme }>((props) => ({
        backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
      }));

    return (
        <Fade bottom>
            <div key={id} className="experience-card" style={classes.experienceCard}>
                <SingleExpCard theme={theme} className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={imageSource} alt="" />
                </SingleExpCard>
                <div className="experience-details">
                    <SingleDate theme={theme}>{startYear}-{endYear}</SingleDate>
                    <SingleTitle theme={theme}>{jobtitle}</SingleTitle>
                    <SingleDescription theme={theme}>{company}</SingleDescription>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
