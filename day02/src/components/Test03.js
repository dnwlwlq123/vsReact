import React, {useState} from 'react';

const Test03 = () => {
    const [name, setName] = useState('김태진') 
    const [age, setAge] = useState('25')
    const [color, setColor] = useState('cyan')
    const onName = () => {
        setName('이재용')
    }
    const onAge = () => {
        setAge('100')
    }
    const onColor = () => {
        setColor('yellow')
    }
    return (
        <div>
            <h2 style={{background: color}}>
                이름 : {name} / 나이 : {age}
            </h2>
            <p>
                <button onClick={onName}>이재용으로 이름 변경</button>
                <button onClick={onAge}>나이를 100살로 변경</button>
                <button onClick={onColor}>색변경</button>
            </p>
        </div>
    );
};

export default Test03;

/*
Hook 

Hook은 React 16.8버전에 새로 추가되었습니다.
Hoo
*/