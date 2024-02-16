'use client'
import React, { useContext } from 'react';

import './About.css';
import { useThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import Image from 'next/image'



function About() {
    const { theme } = useThemeContext();
    const imageSource = aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2;
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <Image 
                        src={imageSource} 
                        width={380}
                        height={400}
                        alt=""
                    />
                </div>
            </div>
        </div>

    )
}

export default About
