// import logo from './logo.svg';
import './App.css';

function Son (props) {
  return <div>this is son {props.name}, jsx:{props.child}</div>
}

function App() {
  const name = "this is  app name"
  return (
    <div className="App">
       <Son 
        name={name}
        age={18}
        isTrue={false}
        obj={{name:'jack'}}
        cb={()=> console.log(123)}
        child={<span> this is span</span>}
       />
    </div>
  );
}

export default App;
