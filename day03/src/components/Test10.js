import React, { useRef, useState } from 'react';

const Test10 = () => {
    const nameRef = useRef()
    const seq = useRef(1)
    const [data, setData] = useState([])
    const [dto, setDto] = useState({ //1인분
        name:'',
        age:''
    })
    const {name, age} = dto
    const onInput = (event) => {
        const{name, value} = event.target
        setDto({
            ...dto,
            [name]: value
        })
    }
    const onAdd =(event) =>{
       event.preventDefault() //브라우저의 고유의 동작을 중단시키는 역할
       if(!name || !age) return;
       setData([...data,
        {
            seq: seq.current++,
            name: name,
            age: age
       }
    ])
    setDto({
        name:'',
        age:''
    })
    nameRef.current.focus()
    }
    return (
        <div>   
            <form onSubmit={ onAdd }>
                이름 : <input type='text' name='name' value={name} onChange={onInput} ref={nameRef}/>
                <br/>
                나이 : <input type='text' name='age' value={age} onChange={onInput}/>
                <br/>
                <button type='submit'>추가</button>
            </form>
            <hr/>
            <ul>
            {
                data.map((item, index) => <li key={item.seq}>
                  {item.seq} / {item.name} / {item.age}
                </li>) 
            }
            </ul>
        </div>
    );
};

export default Test10;