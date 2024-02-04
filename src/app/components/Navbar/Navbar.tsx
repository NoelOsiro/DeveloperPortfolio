'use client'
import React, { useState } from 'react';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import './Navbar.css';
import { ThemeContext, useThemeContext } from '@/app/contexts/ThemeContext';  // Import ThemeContext and useThemeContext

import { useStyles } from './style';
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const Navbar = () => {
    // Use the useThemeContext hook to access the context values
    const { theme, setHandleDrawer } = useThemeContext();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer(); // Use the context function to handle drawer opening
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer(); // Use the context function to handle drawer closing
    };

    const shortname = (name: string) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };
    const classes = useStyles();
    return (
        <div className={`navbar ${theme.type}`}>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {shortname('Noel Osiro')}
                </h1>
                <classes.navMenu theme={theme}>
                    <IoMenuSharp
                        onClick={handleDrawerOpen}
                        aria-label='Menu' />
                </classes.navMenu>
                
                    {/* <Drawer
                        variant='temporary'
                        onClose={(event, reason) => {
                            if (reason !== 'backdropClick') {
                                handleDrawerClose();
                            } else {
                                handleDrawerClose();
                            }
                        }}
                        anchor='left'
                        open={open}
                        className='drawer'
                        disableScrollLock={true}
                    >
                        <classes.MuiDrawer theme={theme}>
                        <div className='div-closebtn'>
                            <classes.closebtnIcon theme={theme}>
                                <CloseIcon
                                    onClick={handleDrawerClose}
                                    onKeyDown={(e) => {
                                        if (e.key === ' ' || e.key === 'Enter') {
                                            e.preventDefault();
                                            handleDrawerClose();
                                        }
                                    }}
                                    role='button'
                                    tabIndex={0}
                                    aria-label='Close'
                                />
                            </classes.closebtnIcon>
                        </div>
                        <br />
                        <div onClick={handleDrawerClose}>
                            <div className='navLink--container'>
                                <Fade left>
                                    <Link href='/'>
                                        <classes.drawerItem theme={theme}>
                                            <classes.drawerIcon theme={theme}>
                                                <IoHomeSharp />
                                            </classes.drawerIcon>
                                            <classes.drawerLink theme={theme}>
                                                Home
                                            </classes.drawerLink>
                                        </classes.drawerItem>
                                    </Link>
                                </Fade>
                                <Fade left>
                                    <Link href='/about'>
                                        <classes.drawerItem theme={theme}>
                                            <classes.drawerIcon theme={theme}>
                                                <FaUser />
                                            </classes.drawerIcon>
                                            <classes.drawerLink theme={theme}>
                                                About
                                            </classes.drawerLink>
                                        </classes.drawerItem>
                                    </Link>
                                </Fade>
                                <Fade left>
                                    <Link href='/resume'>
                                        <classes.drawerItem theme={theme}>
                                            <classes.drawerIcon theme={theme}>
                                                <HiDocumentText />
                                            </classes.drawerIcon>
                                            <classes.drawerLink theme={theme}>
                                                Resume
                                            </classes.drawerLink>
                                        </classes.drawerItem>
                                    </Link>
                                </Fade>
                                <Fade left>
                                    <Link href='/services'>
                                        <classes.drawerItem theme={theme}>
                                            <classes.drawerIcon theme={theme}>
                                                <BsFillGearFill />
                                            </classes.drawerIcon>
                                            <classes.drawerLink theme={theme}>
                                                About
                                            </classes.drawerLink>
                                        </classes.drawerItem>
                                    </Link>
                                </Fade>

                                <Fade left>
                                    <Link href='/blog'>
                                        <classes.drawerItem theme={theme}>
                                            <classes.drawerIcon theme={theme}>
                                                <FaFolderOpen />
                                            </classes.drawerIcon>
                                            <classes.drawerLink theme={theme}>
                                                Blog
                                            </classes.drawerLink>
                                        </classes.drawerItem>
                                    </Link>
                                </Fade>

                                <Fade left>
                                    <Link href='/contact'>
                                        <classes.drawerItem theme={theme}>
                                            <classes.drawerIcon theme={theme}>
                                                <MdPhone />
                                            </classes.drawerIcon>
                                            <classes.drawerLink theme={theme}>
                                                Contact
                                            </classes.drawerLink>
                                        </classes.drawerItem>
                                    </Link>
                                </Fade>
                            </div>
                        </div>
                        </classes.MuiDrawer>
                    </Drawer> */}
                


            </div>
        </div>
    );
};

export default Navbar;
