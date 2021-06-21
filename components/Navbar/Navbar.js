import { AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import React, { useState } from 'react';
import NavbarButton from './NavbarButton/NavbarButton.js';
import { useRouter } from 'next/router'
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    hideOnSmall: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
}))

const Navbar = () => {
    const router = useRouter();
    const classes = useStyles();

    return(
        <AppBar position="sticky">
            <Toolbar>
            <Typography variant="h6" edge="start" onClick={() => router.push('/')} style={{cursor: 'pointer'}}>
                Logo
            </Typography>
            <div className={classes.hideOnSmall} style={{marginLeft: "auto"}}>
            <NavbarButton color="inherit" 
            menuItems={[
                {text: "2016", onClick: () => router.push('/activities/2016')},
                {text: "2015", onClick: () => router.push('/activities/2015')},
                {text: "2014", onClick: () => router.push('/activities/2014')},                
            ]}>
                Działalność
            </NavbarButton>
            <NavbarButton 
            color="inherit" 
            menuItems={[
                {text: "Historia", onClick: () => router.push('/about-us/history')},
                {text: "Skład", onClick: () => console.log(router.push('/about-us/members'))},
            ]}>
                O nas
            </NavbarButton>
            <NavbarButton 
            color="inherit"
            onButtonClick={() => router.push('/projects')}
            >
                Nasze projekty
            </NavbarButton>
            <NavbarButton color="inherit" onButtonClick={() => router.push('/contact')}>Kontakt</NavbarButton>
            </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;