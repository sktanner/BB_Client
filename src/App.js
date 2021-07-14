import './App.css';
import { useEffect, useState } from 'react';

import Navbar from './components/navigation/Navbar';
import Portal from './components/auth/Portal';

<<<<<<< HEAD
// import CharacterTable from './components/character/Table';
//0f7756f76f26540951a6290c223f4e0ecc7113ed
=======
import CharacterIndex from './components/character/CharacterIndex';
// import CharacterTable from './components/character/CharacterTable';
>>>>>>> 0ebc78753ed6a331dd4afedb187f46a42bd0c812

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
