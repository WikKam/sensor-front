import React from 'react';
import { Typography } from '@material-ui/core';

export default function Contact(){
    return(
        <div style ={{marginTop: '20vh'}}>
            <Typography gutterBottom variant="h4" component="h4">
                Chcesz dołączyć do koła Sensor?
            </Typography>
            <Typography gutterBottom variant="h5" component="h5">
                Napisz do nas na E-mail:
            </Typography>
            <Typography gutterBottom variant="h5" component="h5">
                sensor@agh.edu.pl
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
            Spotykamy się raz w tygodniu we wtorki o godzinie 18:30 w trybie zdalnym na platformie MSTeams
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
                Zapraszamy!
            </Typography>
        </div>
    )
}