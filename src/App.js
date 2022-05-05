import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {fetchData, setData, incrementId, decrementId,inputId, clearId} from './features/dataSlice'

function App() {
  // your logic goes here!
  const dispatch = useDispatch()
  const data = useSelector((state)=> state.data)
  return (
    <div className="App">
      <div>
        <button onClick={() => {dispatch(fetchData())}}>Trigger Thunk</button>
        <button onClick={() => {dispatch(clearId())}}>Clear</button>
        <button onClick={() => {dispatch(incrementId())}}>Next</button>
        <button onClick={() => {dispatch(decrementId())}}>Back</button>
      </div>
      <input onChange={(e) => { }} />
      <div>
        {data.apiData.primaryImage ? <img src= {data.apiData.primaryImage} alt={data.apiData.title} /> : <p>Waiting for image</p>}
      </div>
    </div>
  );
}

export default App;
