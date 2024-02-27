import './App.css';
import { useRef } from 'react'; 

function App() {
  const inputRef =  useRef(null)
  const showDom = () => {
     console.dir(inputRef.current);
  }

  return (
    <div className="App">
        <div className='cl-form'>
             <input type='text' ref={inputRef} />
             <button onClick={showDom}>获取DOM</button>
        </div>
    </div>
  )

}

export default App;
