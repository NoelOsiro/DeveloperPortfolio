'use client'
import React from 'react';
import {useThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';
import { experienceData } from '../../../data/experienceData'
import ExperienceCard from './ExperienceCard';

function Experience() {
    const { theme } = useThemeContext();
    const imageSource = '/assets/svg/experience/expOrange.svg';
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={imageSource} alt="" />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Experience</h1>
                    {experienceData.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={String(exp.id)}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Experience