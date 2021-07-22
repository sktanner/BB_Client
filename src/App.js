import './App.css';
import { useEffect, useState } from 'react';

// import Loading from './components/navigation/Loading';
import Navbar from './components/navigation/Navbar';
import Portal from './components/auth/Portal';

// import CharacterTable from './components/character/Table';
//0f7756f76f26540951a6290c223f4e0ecc7113ed
import CharacterIndex from './components/character/CharacterIndex';
// import CharacterTable from './components/character/CharacterTable';


function App() {
  const [sessionToken, setSessionToken] = useState('');
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000)
  // }, [])

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
      {/* <Loading /> */}


    </div>
  );
}

export default App;
