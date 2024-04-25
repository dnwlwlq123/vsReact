import React, { useState } from 'react';
import Name from './Name';
import Fruit from './Fruit';
import Output from './Output';

const Test05 = () => {
    const [name, setName] = useState('')
    const [fruit, setFruit] = useState('')
    const onInputName = (event) => {
        const {value} = event.target
        setName(value)
     }
     const onInputFruit = (event) =>{
        const {value} = event.target
        setFruit(value)
     }
    return (
        <div>
            <Name name={name} onInputName={onInputName}/>
            <Fruit fruit={fruit} onInputFruit={onInputFruit}/>
            <Output name={name} fruit={fruit}/>
        </div>
    );
};

export default Test05;