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

const Login = (props) => {
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
        fetch("http://localhost:3000/user/login", {
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
            <Typography variant="h4">Login</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input name="username" value={props.username} onChange={(e) => props.setUsername(e.target.value)} />
                </FormControl>
                <br />
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
                </FormControl>
                <br />
                <Button type="submit" className={classes.button} variant="contained" onClick={props.submitLogin}>Login</Button>
                <br />
                <Link href="#" color="inherit" variant="body2" onClick={props.togglePortal}>Don't have an account?</Link>
            </form>
        </div>
    )
}

export default Login;