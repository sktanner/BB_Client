import './App.css';

import Navbar from './components/navigation/Navbar';
import Portal from './components/auth/Portal';
import Character from './components/character/Character';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Portal />
    </div>
  );
}

export default App;
