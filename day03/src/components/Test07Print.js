import React from 'react';

const Test07Print = ({dto, onNext, onPrev}) => {
    const {name, age, address, phone} = dto
    return (
        <div>
            <ul>
                <li>이름 : <em>{name}</em></li>
                <li>나이 :  <em>{age}</em></li>
                <li>주소 :  <em>{address}</em></li>
                <li>핸드폰 :  <em>{phone}</em></li>
            </ul>
            <p>
                <button onClick={onPrev}>이전</button>
                <button onClick={onNext}>다음</button>
            </p>
        </div>
    );
};  

export default Test07Print;