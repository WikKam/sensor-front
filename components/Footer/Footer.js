import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return {
        container: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            fontStyle: 'italic',
            textAlign: 'center',
            padding: '5vh',
        }
    }
})

export default function Footer(){
    const classes = useStyles();

    return(
        <div className={classes.container}>
            Copyright © Koło naukowe Sensor {(new Date().getFullYear())}. All Rights Reserved.
        </div>
    )
}