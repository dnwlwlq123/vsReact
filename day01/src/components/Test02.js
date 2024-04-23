import React from 'react';

const Test02 = () => {
    //함수 영역 - 조건문, 제어문등 사용 가능
    let title = '신상명세서'
    const name = '홍길동'
    const age = 25
    const addr = '서울'

    const css1 = {
        width: '400px',
        color: 'red',
        backgroundColor: 'yellow',
        fontSize: '1.5em',
        padding: 15,
        margin: 30,
        border: '3px solid #000'
    }
    const css2 = {
        width: '400px',
        backgroundColor: 'hotpink',
        color: 'white',
        fontSize: '20px',
        padding: 15,
        margin: 30
    }
    return (
        <>
            <h2>JSX 영역</h2>
            <h2 style={css1}>{title}</h2>
            <ul>
                <li style={css2}>이름 : {name}</li>
                <li style={{backgroundColor:'red',
                            color: 'yellow',
                            padding: 15,
                            margin: 50}}>
                    나이 : {age}살 {age>=19 ? '성인' : '잼민이'}
                </li>
                <li>주소 : {addr}</li>
            </ul>

        </>
    );
};

export default Test02;