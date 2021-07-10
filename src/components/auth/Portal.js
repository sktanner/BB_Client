import React, { useState } from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography
} from '@material-ui/core';

const Portal = () => {
    return (
        <Box bgcolor="secondary.main" width="25vw" height="50vh">
            <Typography variant="h4">Sign Up</Typography>
            <form>
                <FormControl>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input id="username" value="username" onChange={(e) => console.log(e.target.value)} />
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" value="password" onChange={(e) => console.log(e.target.value)} />
                </FormControl>
                <br />
                <Button variant="contained">Sign Up</Button>
            </form>
        </Box>
    )
}

export default Portal;