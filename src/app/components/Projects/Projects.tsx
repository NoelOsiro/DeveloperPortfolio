'use client'
import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { useThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../../data/projectsData';
import SingleProject from './SingleProject/SingleProject';
import { ProjectsContainer, ProjectsHeader, ProjectsBody, ProjectsBodyContainer, ProjectsViewAll } from './Projects.styles';

function Projects() {
    const { theme } = useThemeContext();


    return (
        <>
            {projectsData.length > 0 && (
                <ProjectsContainer id="projects" theme={theme}>
                    <ProjectsHeader theme={theme} >
                        <h1>{'Projects'}</h1>
                    </ProjectsHeader>
                    <ProjectsBody theme={theme}>
                        <ProjectsBodyContainer theme={theme}>
                            {projectsData.slice(0, 3).map((project) => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </ProjectsBodyContainer>

                        {projectsData.length > 3 && (
                            <ProjectsViewAll theme={theme}>
                                <Link href="/projects">
                                    <button>
                                        View All
                                        <HiArrowRight />
                                    </button>
                                </Link>
                            </ProjectsViewAll>
                        )}
                    </ProjectsBody>
                </ProjectsContainer>
            )}
        </>
    );
}

export default Projects;
