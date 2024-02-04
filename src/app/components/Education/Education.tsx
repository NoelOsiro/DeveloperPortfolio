'use client'
import React, { useContext } from 'react';

import { useThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../../data/educationData'
import Image from 'next/image';

function Education() {

    const { theme } = useThemeContext();
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={String(edu.id)}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <Image src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
