import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100vw',
            maxHeight: '10vh',
        },
        appBar: {
            backgroundColor: 'rgba(230,1,10,0.9)',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        DnD NPC Database
                    </Typography>
                    <Button color="inherit" onClick={props.clickLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;