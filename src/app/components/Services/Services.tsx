'use client'
import React,{useContext} from 'react';

import { ThemeContext, useThemeContext } from '../../contexts/ThemeContext';

import { servicesData } from '../../../data/servicesData';

import './Services.css'
import SingleService from './SingleService/SingleService';

function Services() {

    const { theme } = useThemeContext();
    return (
        <>
            {servicesData.length > 0 && (
                <div className="services" id="services" style={{backgroundColor:theme.secondary}}>
                    <div className="services-header">
                        <h1 style={{color: theme.primary}}>Services</h1>
                    </div>
                    <div className="services-body">
                        <p style={{color:theme.tertiary80}}>
                            These are some of the services I offer. Reach out to me if I can help you with any!
                        </p>
                        <div className="services-bodycontainer">
                            {servicesData.map(services => (
                                <SingleService
                                key={services.id}
                                id={String(services.id)}
                                title={services.title}
                                icon={services.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
       </>
    )
}

export default Services