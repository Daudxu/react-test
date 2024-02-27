// import logo from './logo.svg';
import './App.css';

function Son (props) {
  return <div>this is son, {props.children}</div>
}

function App() {
  return (
    <div className="App">
       <Son> 
          <span> this is span</span>
       </Son>
    </div>
  );
}

export default App;

