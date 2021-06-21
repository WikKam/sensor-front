import React, { useState } from 'react';
import { Card, CardMedia, CardActionArea, CardContent, Typography, Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return {
        root: {
            maxWidth: 345,
            //backgroundColor: theme.palette.primary.main,
            //color: theme.palette.primary.contrastText,
            textAlign: 'left',
            marginBottom: '3vh',
            borderBottom: `5px solid ${theme.palette.primary.main}`
        },
        media: {
            height: 140,
        },
    } 
});

const Project = ({ title, img, children, description, year, id, onClickCallback, currentClickedCard }) => {
    const classes = useStyles();

    const handleClick = () => {
        onClickCallback(id);
    }

    return (
        <Card className={classes.root} color="primary">
            <CardActionArea onClick={handleClick}>
                <CardMedia className={classes.media} image={img} title={title} />
                <CardContent>
                    <Typography gutterBottom variant="body1" color="textSecondary">
                        {year}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="caption" color="textSecondary" style={{marginBottom: '1vh'}}>
                        {description}
                    </Typography>
                    <Collapse in={id === currentClickedCard} timeout="auto" unmountOnExit>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {children}
                    </Typography>
                    </Collapse>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Project;