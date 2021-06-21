import React from 'react';
import { Member, MemberTitle } from '../../components';
import styles from '../../styles/Members.module.css';
import { Paper, List, ListItem, Typography } from '@material-ui/core';

export async function getStaticProps(){
    let res, members = [], error = null;
    try {
        res = await fetch(process.env.API_URL + "/members");
        members = await res.json();
    } catch(e){
        error = "Couldn't fetch members from CMS";
        console.log(e);
    }
    
    return {
        props: {
            members: members,
            error: error,
        }
    }
}

const Members = ({members, error}) => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <Typography variant="h4">Aktualny zarząd koła naukowego "Sensor"</Typography>
                </div>
            <div>
            {error ? <div>{error}</div> : <div className={styles.members}>
                <div className={styles.leaders}>
                    {members.filter(member => member.type === "board").map(member => (<Member key={member.id} name={member.name} description={member.description} variant="h5"/>))}
                </div>
                <div>
                    <Typography variant="h4">
                        Członkowie
                    </Typography>
                </div>
                <div className={styles.others}>
                    {members.filter(member => member.type === "regular").map(member => <Typography key={member.id}>{member.name}</Typography>)}
                </div>
            </div>}
            </div>
            </div>
        </div>
    )
}

export default Members;