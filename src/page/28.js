import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { inscrement, document, addToken } from './store/modules/counterStore'
import { fetchChannelList } from './store/modules/channelStore'
import { useEffect } from 'react';


function App() {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()
  // 使用use
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div className="App">
        <button onClick={() => dispatch(document())}>-</button>
        {count}
        <button onClick={()=> dispatch(inscrement())}>+</button>
        <button onClick={()=> dispatch(addToken(10))}>add to 10</button>
        <ul>
           {channelList ? channelList.map(item => <li key={item.id}>{item.name}</li>) : ""}
        </ul>
    </div>
  )
}

export default App;
