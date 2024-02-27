
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// const URL = "http://geek.itheima.net/v1_0/channels"

const useToggle = () => {
  const [value ,setValue] = useState(true)
  const toggle = () => setValue(!value)

  return {
    value,
    toggle
  }
}

function App() {
  const {value, toggle} = useToggle()
  return (
    <div className="App"> 
      {value && <div>this is div</div>}
      <button onClick={toggle}> toggle </button>
    </div>
  );
}

export default App;

