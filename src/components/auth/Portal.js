import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid
} from '@material-ui/core';

import Signup from './Signup';
import Login from './Login';

const Portal = (props) => {
    const useStyles = makeStyles(() => ({
        root: {
            display: "flex",
            justifyContent: "center",
        },
        gridItem: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(230,1,10,0.9)",
            minHeight: "50vh",
        },
    }))

    const classes = useStyles();

    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const togglePortal = () => { setShowLogin(!showLogin) };
    const submitLogin = () => { console.log(`Form is sent!\nusername: ${username}\npassword: ${password}`) };
    const submitSignup = () => { console.log(`Form is sent!\nusername: ${username}\npassword: ${password}\nconfirm password: ${cPassword}`) }

    return (
        <Grid container className={classes.root}>
            <Grid item xs={4} sm={3} className={classes.gridItem}>
                {showLogin
                    ? <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        togglePortal={togglePortal}
                        submitForm={submitLogin}
                        updateToken={props.updateToken}
                    />
                    : <Signup
                        username={username}
                        password={password}
                        cPassword={cPassword}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        setCPassword={setCPassword}
                        togglePortal={togglePortal}
                        submitForm={submitSignup}
                        updateToken={props.updateToken}
                    />
                }
            </Grid>
        </Grid>
    )
}

export default Portal;