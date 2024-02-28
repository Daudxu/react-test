// import logo from './logo.svg';
import './App.css';

const list = [
  { id: 1001, name: 'Vue'},
  { id: 1002, name: 'React'},
  { id: 1003, name: 'Angular'}
]

function App() {
  return (
    <div className="App">
       <ul>
         {list.map(item => <li key={item.id}> {item.name}</li>)}
       </ul>
    </div>
  );
}

export default App;
