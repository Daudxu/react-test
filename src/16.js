
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Son ({onGetMsg}) {
  const sonMsg = "this is son msg"
  return (
    <div>
        <button onClick={() => onGetMsg(sonMsg)}>send</button>
    </div>
  )
}

function App() {
  const [message ,setMessage ] = useState()
  const getMsg = (msg) => {
    console.log(msg)
    setMessage(msg)
  }
  
  return (
    <div className="App">
       {message}
       <Son onGetMsg={getMsg} />
    </div>
  );
}

export default App;

