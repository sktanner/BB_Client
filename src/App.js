import './App.css';
import { useEffect, useState } from 'react';

import Navbar from './components/navigation/Navbar';
import Portal from './components/auth/Portal';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// import CharacterTable from './components/character/Table';
//0f7756f76f26540951a6290c223f4e0ecc7113ed
import CharacterIndex from './components/character/CharacterIndex';
// import CharacterTable from './components/character/CharacterTable';
import CharacterCard from './components/character/Card';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft:'20px',
    paddingRight: '20px',
    paddingBottom: '20px'
  }
});



function App() {
  const classes = useStyles();
  const [sessionToken, setSessionToken] = useState('');

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

  const protectedView = () => {
    return (sessionToken === localStorage.getItem('token') ? <CharacterIndex token={sessionToken} /> : <Portal updateToken={updateToken} />)
  }

  return (
    <div className="App">
      <Navbar clickLogout={clearToken} token={sessionToken} />
      {protectedView()}
     
      <Grid container spacing={4} className={classes.gridContainer} >
        <Grid item xs={12} sm={6} md={4}>
          <CharacterCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CharacterCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CharacterCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CharacterCard />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
