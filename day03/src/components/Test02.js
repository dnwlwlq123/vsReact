import React, { useState } from 'react';

const Test02 = () => {
    const [check, isCheck] = useState(true)
    const onInputCheck=(event)=>{
        const {checked}=event.target
        isCheck(checked)
    }
    return (
        <div style={{color: check ? 'blue':'red', fontSize:25, margin:30}}>
            <input type="checkbox" checked={check} onChange={onInputCheck}/> have have have!!!!
        </div>
    );
};

export default Test02;