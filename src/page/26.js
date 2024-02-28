import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { inscrement, document } from './store/modules/counterStore'


function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
        <button onClick={() => dispatch(document())}>-</button>
        {count}
        <button onClick={()=> dispatch(inscrement())}>+</button>
    </div>
  )

}

export default App;
