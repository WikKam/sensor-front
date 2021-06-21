import React from 'react';
import styles from './Member.module.css';

const MemberTitle = (props) => {
    return(
        <div className={styles.title}>
            <h2>
                {props.children}
            </h2>
        </div>
    )
}

export default MemberTitle;