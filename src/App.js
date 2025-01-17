import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import {fetchData, setData, incrementId, decrementId,inputId, clearId} from './features/dataSlice'
import { useEffect } from 'react';

const mapStateToProps = (state) =>({
  objectId: state.data.objectId
})

function App(props) {
  // your logic goes here!
  const dispatch = useDispatch()
  const data = useSelector((state)=> state.data)

  useEffect(()=>{
    dispatch(fetchData())
  }, [props.objectId, dispatch])

  return (
    <div className="App">
      <div>
        <button onClick={() => {dispatch(fetchData())}}>Trigger Thunk</button>
        <button onClick={() => {dispatch(clearId())}}>Clear</button>
        <button onClick={() => {dispatch(incrementId())}}>Next</button>
        <button onClick={() => {dispatch(decrementId())}}>Back</button>
      </div>
      <input  value={data.ObjectId} onChange={(e) => {dispatch(inputId(Number(e.target.value))) }} />
      <div>
        {data.objectId}
        <br/>
        {data.apiData.primaryImage ? <img src= {data.apiData.primaryImage} alt={data.apiData.title} /> : <p>Waiting for image</p>}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App)
