
// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
// const URL = "http://geek.itheima.net/v1_0/channels"

function Son () {
    useEffect(() => {
      const timer = setInterval(() => {
          console.log("定时器执行中...")
       }, 1000)

       return () => {
          // 清除副作用
          clearInterval(timer)
       }
    })
    return <div>this is son</div>
}


function App() {
  const [show, setShow] = useState(true)
  

  return (
    <div className="App">
      this is app
      {show && <Son />}
      <button onClick={() => setShow(!show)}>卸载Son组件</button>
    </div>
  );
}

export default App;

