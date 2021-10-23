import React from 'react';
import { Paper } from '@material-ui/core';

function Introduction () {
    return(
        <div>
            
            <Paper style={{width:"100%", minHeight:"60vh", flexDirection:"column", paddingTop: "7vh", paddingLeft:"5px", paddingRight:"5px",borderRadius:"1rem", border:"solid red 3px"}}>
                <img src="./assets/scroll.png" id="scroll"></img>
                <h3>Welcome to the NPC Generator!</h3>
                <br />
                <h5>Sign up and create your own characters to fill the world for any RPG game.</h5>
                <img src="./assets/scroll.png" id="scroll"></img>
            </Paper>
        </div>
    )
}

export default Introduction;