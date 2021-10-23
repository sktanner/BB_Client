import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import CharacterCard from '../src/components/character/CharacterCard';
import Portal from '../src/components/auth/Portal';
import CharacterIndex from '../src/components/character/CharacterIndex';


function App() {
  const [sessionToken, setSessionToken] = useState('');

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
      color: "black",
      fontWeight: "bold",
    },
    button: {
      color: "black",
      fontWeight: "bold",
    },
  }));

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const classes = useStyles();

  const protectedView = () => {
    return (sessionToken === localStorage.getItem('token') ? <CharacterIndex token={sessionToken} /> : <Portal updateToken={updateToken} />)
  }

  return (
    <div className="App">
      {/* <Navbar clickLogout={clearToken} token={sessionToken} /> */}

      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            {/* <img width="75em" src="./assets/dnd_bug_1c_blk_v1_xl_rgb.png" /> */}
            <Typography variant="h5" className={classes.title} id="title">
              NPC GENERATOR
            </Typography>
            {sessionToken && (
              <>
                <Link to="/" className="myCharactersLink">
                  <Button className={classes.button}>
                    Create a Character
                  </Button>
                </Link>

                <Link to="/characters" className="myCharactersLink">
                  <Button className={classes.button}>
                    My Characters
                  </Button>
                </Link>
                <Button className={classes.button} color="inherit" onClick={clearToken}>Logout</Button>
              </>)}
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route path="/characters">
          {sessionToken ? <CharacterCard token={sessionToken} /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {protectedView()}
        </Route>

      </Switch>


    </div>
  );
}

export default App;