import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link
} from '@material-ui/core';

const Signup = (props) => {
    return (
        <div>
            <Typography variant="h4">Sign Up</Typography>
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
                <FormControl>
                    <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
                    <Input id="cpassword" onChange={(e) => console.log(e.target.value)} />
                </FormControl>
                <br />
                <Button variant="contained" onClick={props.submitSignup}>Sign Up</Button>
                <br />
                <Link href="#" color="inherit" onClick={props.togglePortal}>Already have an account?</Link>
            </form>
        </div>
    )
}

export default Signup;