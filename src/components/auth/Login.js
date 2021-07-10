import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link
} from '@material-ui/core';

const Login = (props) => {
    return (
        <div>
            <Typography variant="h4">Login</Typography>
            <form>
                <FormControl>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input id="username" onChange={(e) => console.log(e.target.value)} />
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" onChange={(e) => console.log(e.target.value)} />
                </FormControl>
                <br />
                <Button variant="contained" onClick={props.submitLogin}>Sign Up</Button>
                <br />
                <Link href="#" color="inherit" onClick={props.togglePortal}>Don't have an account?</Link>
            </form>
        </div>
    )
}

export default Login;