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

   
    const SingleEducationCard = styled('div')<{ theme: CustomTheme }>((props) => ({
        backgroundColor: props.theme.primary30,
        "&:hover": {
            backgroundColor: theme.primary50,
            cursor: 'pointer',
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent: 'flex-start',
        height: 140,
        borderRadius: 20,
        
        transition: 'background-color 200ms ease-in-out',
    }));
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
    const imageSource = theme.type === 'light' ? eduImgBlack :eduImgWhite

    return (
        <Fade bottom>
            <SingleEducationCard theme={theme} key={id} className="education-card">
                <SingleEducationImage className="educard-img" theme={theme} >
                    <Image src={imageSource} alt="" />
                </SingleEducationImage>
                <div className="education-details">
                    <SingleDate style={{ color: theme.primary }} theme={theme}>{startYear}-{endYear}</SingleDate>
                    <SingleTitle style={{ color: theme.tertiary }} theme={theme}>{course}</SingleTitle>
                    <SingleDescription style={{ color: theme.tertiary80 }} theme={theme}>{institution}</SingleDescription>
                </div>
            </SingleEducationCard>
        </Fade>
    )
}

export default EducationCard
