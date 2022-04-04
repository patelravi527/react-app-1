import './App.css';
import Navbar from './componets/Navbar';
import FormText from './componets/FormText';
import React, { useState } from "react";

function App() {


  const [mode, setMode] = useState('black');

  const toggleMode = () =>{
    if(mode === 'black'){
      setMode('white');
      document.body.style.backgroundColor = '#000';
    }
    else{
      setMode('black');
      document.body.style.backgroundColor = '#fff';
    }
  }
  

  return (
    <>
      <Navbar nav1='Home' nav2='About US' nav3="Conatc Us" mode={mode} toggleMode={toggleMode} />
      <FormText mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
