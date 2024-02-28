
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function A({onGetAName}) {
    const name = 'this is A name'
    return (
      <div> 
         this is A compnent
         <button onClick={() => onGetAName(name)}>send</button>
      </div>
    )
}

function B(props) {
  // const name = 'this is B name'
  return (
    <div> 
       this is B compnent {props.name}
       {/* <button>send</button> */}
    </div>
  )
}

function App() {
 const [name, setName] = useState('')
 const  getAName =  (name) => {
    console.log(name)
    setName(name)
 }

  return (
    <div className="App">
       <A onGetAName={getAName} />
       <B name={name}/>
    </div>
  );
}

export default App;

