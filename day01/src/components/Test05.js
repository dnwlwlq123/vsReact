import React from 'react';
import Test05Sub from './Test05Sub';

const Test05 = () => {
    return (
        <div>
            <Test05Sub name='김태진' 
                       age='29' 
                       addr='뉴욕' 
                       tel='010-0000-0000' 
                       color='tomato'
                       bgcolor='cyan'
                       done={true}/>
            <hr/>
            <Test05Sub name='코난'
                       age='29' 
                       addr='과테말라'
                       color='skyble'
                       tel='010-0000-0000' 
                       bgcolor='hotpink'/>
        </div>
    );
};

export default Test05;