import React from 'react';
import'../css/Test03.css';
import mystyle from '../css/Test03.module.css';

const Test03 = () => {
    return (
        <div>
            <div className='box'>Test(Test03.css)</div>
            <div className={mystyle.box}>Test (Test03.module.css)</div>
        </div>
    );
};

export default Test03;

/*
컴포넌트별로 css 작성
- 파일명.module.css
- import 참조변수 form './파일명.module.css';
- 개발자 도구에서 보면 파일명_클래스명_아무말 이라고 설정된다
*/