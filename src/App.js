import logo from './logo.svg';
import './App.css';
import Menu from './Game/Menu';
import Game from './Game/Game';
import {useState} from 'react'

function App() {
  console.log('test')
  const [gameMode, setGameMode] = useState(null);
  return (
    <>
    {!gameMode &&  <Menu setGameMode = {setGameMode} />}
     {gameMode && < Game mode = {gameMode}/>}
    </>
  )
}

export default App;
