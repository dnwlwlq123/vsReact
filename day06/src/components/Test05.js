import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
const initialState={
    dto : {},
    error: null,
    loading: true
}

const reducer=(state, action)=>{
    switch(action.type){
        case 'SUCCESS' :
            return {
                dto: action.payload,
                error: null,
                loading: false
            }
        case 'ERROR' : 
            return {
                dto:{},
                error : '404Error',
                loading: true
            }
        default: return state
    }
}

const Test05 = () => {
    const [id, setId]=useState(1)
    const [search, setSearch] = useState(100)
    const [dto, setDto] = useState({})
    const [state, dispatch] = useReducer(reducer, initialState)
    const onSearch = (id) => {
        setSearch(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res=>(dispatch({type: 'SUCCESS', payload:res.data})))
        .catch(err=>(dispatch({type: 'ERROR'})))
    },[search])
    return (
        <div>
            <h3>
                ID 입력 (1~5000) : 
                <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
                <button onClick={onSearch}>검색</button>
            </h3>
            <h2>{
                state.dto.id && state.loading ? '로딩 중' : <img src={state.dto.thumbnailUrl}/>
            }
            </h2>
            <p>{
                state.error ? state.error : null
            }
            </p>
        </div>
    );
};

export default Test05;