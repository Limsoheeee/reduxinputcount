import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount} from "./slice/inputcountSlice"
import inpuCountSlice from './slice/inputcountSlice'

function InputCount() {
    const inputcount = useSelector((state) => state.inputcounter.value);
    const dispatch = useDispatch();


    const [num,setNum]=useState(0);
    const onChangeHandler = (e) =>{
       const{value} =  e.target;
        console.log(typeof value)
        setNum(Number(value))
    };

    const handlePlus = ()=>{
        dispatch(increment())
    }

    const handleMinus = ()=>{
        dispatch(decrement())
    }

    const handleSubmit = ()=>{
        dispatch(incrementByAmount(num))
    }


    
    return(
        <div>
           {inputcount}
           <button onClick={()=>dispatch(increment())}>더하기1</button>
           <button onClick={()=>dispatch(decrement())}>빼기1</button>
           <input type='number' onChange={onChangeHandler}/>
            <button onClick={handleSubmit}>제출</button>
        </div>
    )
};


export default InputCount;