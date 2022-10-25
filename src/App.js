import './App.css';
import Feed from './Components/Feed';
import Menu from './Components/Menu';
import {useState} from 'react';


function App() {

  return (
    <div className="App">
      <h1>Welcome to Blockstagram!</h1>
      <Feed></Feed> 
    </div>
  );
}

export default App;
