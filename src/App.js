import './App.css';
import { useEffect, useState } from 'react';

import Navbar from './components/navigation/Navbar';
import Portal from './components/auth/Portal';

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
      <Navbar clickLogout={clearToken} />
      <Portal updateToken={updateToken} />
    </div>
  );
}

export default App;
