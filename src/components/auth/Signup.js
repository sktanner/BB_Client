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
            body: JSON.stringify({user:{username: props.username, email: props.email, passwordhash: props.password}}),
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
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input required name="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
                </FormControl>
                <br />
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input required type="password" name="password" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
                </FormControl>
                <br />
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
                    <Input required type="password" name="cpassword" />
                </FormControl>
                <br />
                <Button type="submit" className={classes.button} variant="contained" onClick={props.submitSignup}>Sign Up</Button>
                <br />
                <Link href="#" color="inherit" variant="body2" onClick={props.togglePortal}>Already have an account?</Link>
            </form>
        </div>
    )
}

export default Signup;