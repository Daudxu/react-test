import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchFoodsList } from './store/modules/takeaway'
import { useEffect } from 'react';


function App() {
  const { foodsList } = useSelector(state => state.foods)
  const dispatch = useDispatch()
  // 使用use
  useEffect(() => {
    dispatch(fetchFoodsList())
  }, [dispatch])

  return (
    <div className="App">
        <ul>
           {foodsList ? foodsList.map(item => <li key={item.id}>{item.title}</li>) : ""}
        </ul>
    </div>
  )
}

export default App;
