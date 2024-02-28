
// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
// const URL = "http://geek.itheima.net/v1_0/channels"

function App() {
  const [count, setCount] = useState(0)
  
  // 1. 没有依赖项 初始 + 组件更新
  // useEffect(() => {
  //      console.log("副作用函数执行了")
  // })

  // 2. 传入空数组依赖
  // useEffect(()=>{
  //   console.log("副作用函数执行了")
  // },[])

  // 3. 传入特定的依赖项 初始+ 依赖项变化时执行了
    useEffect(()=>{
      console.log("副作用函数执行了")
    },[count])

  return (
    <div className="App">
      this is app
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  );
}

export default App;

