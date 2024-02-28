// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App() {

  const [count, setCount ] = useState(0)

  const handleClick = () => {
      setCount(count+1)
  }

  return (
    <div className="App">
        <button onClick={handleClick}> {count} </button>
    </div>
  )

}

export default App;
