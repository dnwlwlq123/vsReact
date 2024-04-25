import React from 'react';

const Test02 = () => {
    const title = '신상명세서'
    const arr = ['이동우', '김용환', '최교순', '박정연', '그리고 김태진']
    const data = [
        { id:1, name:'이동우'},
        { id:2, name:'김용환'},
        { id:3, name:'최교순'},
        { id:4, name:'박정연'},
        { id:5, name:'그리고 김태진'},
    ]
    return (
        <div>
            <h2>{ title}</h2>
            <ul style={{ border: '1px solid red'}}>
                {
                    //map을 사용할때는 반드시 key 작성해야 한다.    
                    arr.map((item, index) => {
                        return(<li key = {index}>{index} : {item}</li>)
                    })
                }
            </ul>
            <ul style={{border: '1px solid blue'}}>
                {
                    data.map((item) => {
                        return(<li key = {item.id}>{item.id} : {item.name}</li>)
                    })
                }
            </ul>
        </div>
    );
};

export default Test02;