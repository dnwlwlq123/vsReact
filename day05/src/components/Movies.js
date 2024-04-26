import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const Movies = () => {
    const [date, setDate] = useState('20240426')
    const [list, setList] = useState([])
    const [search, setSearch] = useState(10)

    const onSearch = (date) => {
        setSearch(date)
    }

    useEffect(()=>{
        axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`)
        .then(res=>setList(res.data.boxOfficeResult.dailyBoxOfficeList))
    },[search])
    return (
        <div>
            <input type='text' value={date} onChange={e=>setDate(e.target.value)}/>
            <button onClick={ () => onSearch(date)}>검색</button>
            <hr/>
             <ul>
               
                {
                list.map(item=> <li key={item.rank}>
                      {item.rank} . {item.openDt} / {item.movieNm}
                    </li>)
                }
                    
                
            </ul> 
        </div>
    );
};

export default Movies;

/*
? 기호는 JavaScript 및 React에서 여러 가지 용도로 사용됩니다. 위에서 제공한 코드에서 ? 기호는 "Optional Chaining" 연산자로 사용되며, 특정 객체의 속성에 접근할 때 그 객체 또는 속성이 undefined 또는 null일 수 있음을 나타냅니다. 이를 통해 코드가 해당 속성에 접근하려 할 때 객체나 속성이 존재하지 않아 발생할 수 있는 오류를 방지할 수 있습니다.

예를 들어, dto.boxOfficeResult?.dailyBoxOfficeList?.map()에서 ? 
기호는 dto.boxOfficeResult와 dto.boxOfficeResult.dailyBoxOfficeList가 undefined 또는 null이 
아닌 경우에만 map() 함수를 호출하도록 합니다. 만약 dto.boxOfficeResult 또는 dto.boxOfficeResult.dailyBoxOfficeList가 undefined 또는 null이라면, map() 함수는 호출되지 않고, 오류가 발생하지 않습니다.

이와 비슷하게, ?. 연산자는 속성 값에 접근하거나 메서드를 호출할 때 해당 객체/속성/메서드가 존재하지 않는 경우를 안전하게 처리하고 싶을 때 유용하게 사용됩니다.

또 다른 사용 예로는 "Conditional (Ternary) Operator"가 있습니다. 이는 ?와 : 기호를 함께 사용하여 간단한 조건문을 표현하는데, 예를 들어 condition ? expr1 : expr2는 condition이 true일 경우 expr1을, 그렇지 않은 경우 expr2를 반환합니다.

따라서, ? 기호는 사용되는 문맥에 따라 다양한 의미를 가질 수 있으며, 코드 내에서의 역할은 그 사용 방법에 따라 달라집니다.


다시 생성
*/ 