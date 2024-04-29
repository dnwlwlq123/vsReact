import React, { useMemo, useState } from 'react';

const Test03 = () => {
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)

    //브라우저에서 count1 값은 바뀌면서 출력되지만, 짝수, 홀수의 결과는 바뀌지 않는다
    // const isEven = () => {
    //     return count1%2 === 0
    // }


    //사용자 함수를 만들어서 return할 경우 return 값을 기억하기 때문에 결과가 짝수, 홀수가 나온다
    //count1이ㅡ 값이 바뀔때만 useMemo()가 실행이 되고, count2는 값이 바뀌어도 useMemo()를 호출하지 않음
    const isEven = useMemo(() => {
        return count1%2 === 0
    }, [count1])
    return (
        <div>
            <h2>카운트 : {count1}</h2>
            <button onClick={ ()=>setCount1(count1+1)}>증가</button>

            <h2>카운트 : {count2}</h2>
            <button onClick={ ()=>setCount2(count2-1)}>감소</button>

            <h2>
                결과 : { isEven ? '짝수' : '홀수'}
            </h2>
        </div>
    );
};

export default Test03;