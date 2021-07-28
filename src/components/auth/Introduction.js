import React from 'react';
import { Paper } from '@material-ui/core';

function Introduction () {
    return(
        <div>
            <Paper style={{width:"100%", minHeight:"60vh"}}>
                <p>Welcome to the Dungeons and Dragons Generator!</p>
                <br />
                <p>Sign up and create your own characters to fill the world for any RPG game.</p>
            </Paper>
        </div>
    )
}

export default Introduction;