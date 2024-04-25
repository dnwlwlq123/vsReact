import React from 'react';

const Name = ({name, onInputName}) => {
    return (
        <div>
            <label>이름입력 : </label>
            <input type='text' value={name} onChange={onInputName}/>
        </div>
    );
};

export default Name;