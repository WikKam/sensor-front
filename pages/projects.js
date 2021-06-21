import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {Project} from '../components';
import styles from '../styles/Projects.module.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        marginTop: '5vh'
    }
})

export async function getStaticProps(){
    let res, posts = [], error = null;
    try {
        res = await fetch(process.env.API_URL + "/projects");
        posts = await res.json();
    } catch (e) {
        error = "Couldn't fetch data from CMS :(";
        console.log(e);
    }

    return {
        props: {
            posts: posts,
            error: error,
            url: process.env.API_URL
        }
    }
}

const Projects = ({posts, error, url}) => {
    const classes = useStyles();
    const [clickedCard, setClickedCard] = useState(null);

    const onClickCallback = (id) => {
        if(clickedCard === id){
            setClickedCard(null);
            return;
        }
        setClickedCard(id);
    }

    return(
        <div>
        <Typography variant="h3" component="h3" className={classes.header}>
            Nasze projekty
        </Typography>
        <div className={styles.container}>
        { error ? <div>{error}</div> : posts.map(({name, description, content,  picture, id, year}) => 
        <Project 
        key={id} 
        title={name} 
        img={url + picture.formats.thumbnail.url}
        id={id}
        year={year}
        description={description}
        onClickCallback={onClickCallback}
        currentClickedCard={clickedCard}
        >{content}</Project>)}
        </div>
        </div>
    )
}

export default Projects;