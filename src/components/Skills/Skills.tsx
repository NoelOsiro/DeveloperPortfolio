'use client'
import React from 'react';
import Marquee from "react-fast-marquee";
import './Skills.css'
import { useThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '@//data/skillsData'
import { skillsImage } from '@/utils/skillsImage'

function Skills() {
    const { theme } = useThemeContext();
    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }
    const skillsImage = (skill:string)=>{
        return './assets/svg/skills/' + skill.toLowerCase() + '.svg'
    }
    return (
        <div className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills