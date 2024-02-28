
// import logo from './logo.svg';
import { createContext, useContext } from 'react';
import './App.css';

const MsgContext = createContext()

function A() {
  const msg = useContext(MsgContext)
    return (
      <div> 
         this is A compnent {msg}
         <B />
      </div>
    )
}

function B() {
  const msg = useContext(MsgContext)
  
  return (
    <div> 
      this is B compnent {msg}
    </div>
  )
}

function App() {
  const msg = 'this is app msg'
  return (
    <div className="App">
      <MsgContext.Provider value={msg}>
          this is App
          <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;

