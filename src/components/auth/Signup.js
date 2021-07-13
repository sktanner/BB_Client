import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link
} from '@material-ui/core';

const Signup = (props) => {
    const useStyles = makeStyles(() => ({
        root: {
            marginBottom: '10px',
        },
        button: {
            marginTop: '10px',
        }
    }))

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({user:{username: props.username, passwordhash: props.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then (
            (res) => res.json()
        ).then ((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <Typography variant="h4">Sign Up</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input required name="username" value={props.username} onChange={(e) => props.setUsername(e.target.value)} />
                </FormControl>
                <br />
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input required name="password" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
                </FormControl>
                <br />
                {/* <FormControl className={classes.root}>
                    <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
                    <Input id="cpassword" value={props.cPassword} onChange={(e) => props.setCPassword(e.target.value)} />
                </FormControl>
                <br /> */}
                <Button type="submit" className={classes.button} variant="contained" onClick={props.submitSignup}>Sign Up</Button>
                <br />
                <Link href="#" color="inherit" variant="body2" onClick={props.togglePortal}>Already have an account?</Link>
            </form>
        </div>
    )
}

export default Signup;