
// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
const URL = "http://geek.itheima.net/v1_0/channels"

function App() {
  const [list, setList] = useState([])
  // console.log("----")
  useEffect(() => {
     async function getList() {
         const res = await fetch(URL)
         const jsonRes = await res.json()
         console.log(jsonRes)
         setList(jsonRes.data.channels)
     }
     getList()
  },[])
  return (
    <div className="App">
      this is app
      <ul>
        {list.map(item => <li key={item.id} >{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

