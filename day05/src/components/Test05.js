import React, { useMemo, useState } from 'react';

const user = [
    {id:1, name: '김태진'},
    {id:2, name: '김뛔진'},
    {id:3, name: '김따진'},
    {id:4, name: '진태김'},
    {id:5, name: '태김진'},
    {id:6, name: '김진태'},
    {id:7, name: '이진태'},
    {id:8, name: '이태진'},
    {id:9, name: '오태진'},
    {id:10, name: '육태진'},

]

const Test05 = () => {
    const [data, setData] = useState(user)
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')

    //검색버튼
    // const onSearch=()=>{
    //     // setData(user.filter(item=>item.name.toLowerCase.indexOf(text.toLowerCase) !== -1))
    //     setData(user.filter(item=>item.name.toLowerCase().includes(text.toLowerCase())))
    // }

    //검색 버튼 - useMemo
    useMemo(()=> {
        setData(user.filter(item=>item.name.toLowerCase().includes(text.toLowerCase())))
    }, [search])
    const onSearch = () => {
        setSearch(text)
    }
     return (
        <div>
            <input type='text' value={text} onChange={e=> setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test05;