'use client'
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { ThemeContext, useThemeContext } from '../../contexts/ThemeContext';
import eduImgWhite from '/public/assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '/public/assets/svg/education/eduImgBlack.svg'
import './Education.css'
import { CustomTheme, styled } from '@mui/material/styles';
import Image from 'next/image';

interface EducationCardProps {
    endYear: string;
    startYear: string;
    course: string;
    institution: string;
    id: string;
}

function EducationCard({ id, institution, course, startYear, endYear }: EducationCardProps) {

    const { theme } = useThemeContext();

    const useStyles = () => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    });
    const SingleEducationImage = styled('div')<{ theme: CustomTheme }>((props) => ({
        backgroundColor: props.theme.primary,
    }));
    const SingleDate = styled('h6')<{ theme: CustomTheme }>((props) => ({
        color: props.theme.primary,
    }));
    const SingleTitle = styled('h4')<{ theme: CustomTheme }>((props) => ({
        color: props.theme.tertiary,
    }));
    const SingleDescription = styled('h6')<{ theme: CustomTheme }>((props) => ({
        color: props.theme.tertiary80,
    }));
    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <SingleEducationImage className="educard-img" theme={theme} >
                    <Image src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </SingleEducationImage>
                <div className="education-details">
                    <SingleDate style={{ color: theme.primary }} theme={theme}>{startYear}-{endYear}</SingleDate>
                    <SingleTitle style={{ color: theme.tertiary }} theme={theme}>{course}</SingleTitle>
                    <SingleDescription style={{ color: theme.tertiary80 }} theme={theme}>{institution}</SingleDescription>
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard
