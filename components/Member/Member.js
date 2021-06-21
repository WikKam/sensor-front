import React from 'react';
import styles from './Member.module.css';
import { Typography } from '@material-ui/core';

const Member = (props) => {
    return(
        <div className={styles.container}>
            <Typography variant={props.variant}>
                {props.name}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {props.description}
            </Typography>
        </div>
    )
}

export default Member;