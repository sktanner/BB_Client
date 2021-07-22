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
        title: {
            fontWeight: 'bold',
        },
        button: {
            marginTop: '10px',
            backgroundColor: 'black',
            color: 'rgba(230,1,10,1)',
            '&:hover': {
                backgroundColor: 'rgba(230,1,10,1)',
                color: 'black',
            },
        },
        confirm: {
            backgroundColor: "#282c34",
            color: "rgba(230,1,10,0.9)",
        },
        link: {
            '&:hover': {
                color: 'black',
                fontWeight: 'bold',
            },
        }
    }))

    const classes = useStyles();

    const [cPassword, setCPassword] = useState('');
    const [failMsg, setFailMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({ user: { username: props.username, email: props.email, passwordhash: props.password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <Typography className={classes.title} variant="h4">Sign Up</Typography>
            <form onSubmit={(e) => {
                if (props.password === cPassword) {
                    handleSubmit(e);
                } else {
                    setFailMsg('Passwords do not match.')
                    // setTimeout(() => { setFailMsg('') }, 4000)
                }
            }
            }>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input required name="username" value={props.username} onChange={(e) => props.setUsername(e.target.value)} />
                </FormControl>
                <br />
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input required type="email" name="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
                </FormControl>
                <br />
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input required type="password" name="password" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
                </FormControl>
                <br />
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
                    <Input required type="password" name="cpassword" value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
                </FormControl>
                <br />
                <Typography className={classes.confirm} variant="body1">
                    {failMsg}
                </Typography>
                <Button type="submit" className={classes.button} variant="contained">Sign Up</Button>
                <br />
                <Link className={classes.link} href="#" color="inherit" variant="body2" onClick={props.togglePortal}>Already have an account?</Link>
            </form>
        </div >
    )
}

export default Signup;