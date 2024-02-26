// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';

const style = {
  color:'red',
  fontSize:'50px'
}

function App() {

  return (
    <div className="App">
        <span style={{style}}>this is span</span>
        <span className='foo'>this is class foo</span>
    </div>
  )

}

export default App;
