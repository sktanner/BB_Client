import './App.css';
import { useEffect, useState } from 'react';

import Navbar from './components/navigation/Navbar';
import Portal from './components/auth/Portal';

import CharacterIndex from './components/character/CharacterIndex';
// import CharacterTable from './components/character/CharacterTable';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
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
  
  return (
    <div className="App">
      <Navbar clickLogout={clearToken} token={sessionToken} />
      <Portal updateToken={updateToken} />

      <CharacterIndex />

    </div>
  );
}

export default App;
