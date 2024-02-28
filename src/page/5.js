// import logo from './logo.svg';
import './App.css';


function App() {
  const handleClick = (name, e)=> {
    console.log("button-",name ,"---",e);
  };
  
  return (
    <div className="App">
       <button onClick={(e) => handleClick("zhangsan", e)}>click</button>
    </div>
  );
}

export default App;
