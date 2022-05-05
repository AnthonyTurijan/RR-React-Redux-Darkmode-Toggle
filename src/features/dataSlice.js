import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    objectId: 512,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) =>{
            return {...state, apiData: action.payload}
        },
        incrementId: (state) => {
            return {...state, objectData: state.objectId + 1 }
        },
        decrementId: (state)=>{
            return { ...state, objectId: state.objectId - 1}
        },
        inputId: (state, action) =>{
            return {...state, apiData: action.payload}
        },
        clearId: ()=>{
            return initialState
        }
    }
})

export const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId} `)
        const resData = await response.json()
        dispatch(setData(resData))

    }
    return dataThunk
}

export const {setData, incrementId, decrementId,inputId, clearId} = dataSlice.actions

export default dataSlice.reducer