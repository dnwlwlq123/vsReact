// import React, { useMemo } from 'react';

// const getColor = (color) => {
//     console.log('getColor')
// }
//     switch(color){
//         case 'hotpink':
//             return '진분홍'
//         case 'magenta':
//             return '보라'
//         case 'skyblue':
//             return '하늘'
//         case 'tomato':
//             return '토마토'
//     }

//     const getFood = (food) => {
//         console.log('getFood')
//     }
//         switch(color){
//             case '햄버거':
//                 return '인스턴스'
//             case '갈비 점심특선':
//                 return '돼지고기'
//             case '브롱스':
//                 return '이효식'
//             case '모퉁이집':
//                 return '플라스틱'
//         }


// const Test04Sub = ({color,food}) => {
//     //실행하자마자 또는 color값을 바꾸거나, food의 값을 바꾸면 로그가 모두 찍힌다.
//     // const colorInfo = getColor(color)
//     // const foodInfo = getFood(food)

//     //해결방법
//     //useMemo를 사용하면
//     //color를 바꾸면 getColor 로그만 직히고, food를 바꾸면 getFood 로그만 찍히도록 한다.
//     const colorInfo = useMemo(() => {
//         return getColor(color)
//     }, [color])
//     const foodInfo = useMemo(() => {
//         return getFood(food)
//     }, [food])

//     return (
//         <div>
//             <h3>선택한 색 : {color}</h3>
//             <h4>당신은 {colorInfo}을 좋아하는군요</h4>

//             <h3>선택한 음식 : {food}</h3>
//             <h4>당신은 {foodInfo}을 좋아하는군요</h4>
//         </div>
//     );
// };

// export default Test04Sub;