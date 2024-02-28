// import logo from './logo.svg';
import './App.css';

const isLogin = false

function App() {
  return (
    <div className="App">
       {/**逻辑判断 */}
       {isLogin && <span>this is span</span>}
       {/**三元运算符 */}
       {isLogin ? <span>jack</span> :<span>login</span> }
    </div>
  );
}

export default App;
