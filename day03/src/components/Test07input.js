import React from 'react';

const Test07input = ({dto, onNext, onInput}) => {
    const {name, age, address, phone} = dto
    return (
        <div>
            <p>이름 : <input type='text' name='name' vlaue={name} onChange={onInput}/></p>
            <p>나이 :  <input type='text' name='age' vlaue={age} onChange={onInput}/></p>
            <p>주소 : <input type='text' name='address' vlaue={address} onChange={onInput}/></p>
            <p>핸드폰 : <input type='text' name='phone' vlaue={phone} onChange={onInput}/></p>
            <p><button onClick={onNext}>다음</button></p>
        </div>
    );
};

export default Test07input;