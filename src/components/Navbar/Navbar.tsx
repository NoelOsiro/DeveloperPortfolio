'use client'
import React, { useState } from 'react';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { headerData } from '@/data/headerData';
import { useThemeContext } from '@/contexts/ThemeContext';  // Import ThemeContext and useThemeContext
import { useStyles } from './style';
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const Navbar = () => {
    // Use the useThemeContext hook to access the context values
    const {theme, setHandleDrawer } = useThemeContext();
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
    const Styles = useStyles(theme);
    return (
        <Styles.navBar>
            <Styles.navbarContainer>
            <Styles.styledH1>
                    {shortname(headerData.name)}
            </Styles.styledH1>
            <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </Styles.navbarContainer>
        </Styles.navBar>
    );
};

export default Navbar;
