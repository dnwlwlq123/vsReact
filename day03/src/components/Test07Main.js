import React, { useRef, useState } from 'react';
import Test07input from './Test07input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';
import '../css/Test07.css';

const Test07Main = () => {
    const nameRef = useRef()
  

    const [dto, setDto] = useState({
        name:'',
        age:'',
        address:'',
        phone:''
    })
    const {name, age, address, phone} = dto
    const [count, setCount] = useState(1)
    const onInput = (event) => {
        const{name, value} = event.target

        setDto({
            ...dto,
            [name]: value
        })
    }
    const onNext = () => {
        setCount(count+1)
    }
    const onPrev = () => {
        setCount(count-1)
    }
    return (
        <div className='wrap'>
            {
                count === 1 &&  <Test07input dto={dto} onInput={onInput} onNext={onNext}/>
            }
            {
                count === 2 && <Test07Print dto={dto} onNext={onNext} onPrev={onPrev}/>
            }
            {
                count === 3 &&  <Test07Output name={name}/>
            }
           
        </div>
    );
};

export default Test07Main;