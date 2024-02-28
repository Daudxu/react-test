// import logo from './logo.svg';
import './App.css';
const count = 100;

function getName () {
  return "zhansgan"
}

function App() {
  return (
    <div className="App">
        {"this is  message"}
        <br/>
        {count}
        <br/>

        {/** 函数调用 */}
        {getName ()}
        {/** 方法调用 */}
        { new Date().getDate()}
        {/**使用js对象 */}
        <div style={{ color:'red' }}>
            this is div
        </div>
    </div>
  );
}

export default App;
