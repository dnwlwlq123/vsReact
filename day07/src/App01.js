import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './page01/Home';
import About from './page01/About';
import Ceo from './page01/Ceo';
import NotFiles from './page01/NotFiles';
import Sub01 from './page01/Sub01';

const App01 = () => {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        {/* <a =href=''/>를 사용하면 로딩하느라 빙글 빙글 돈다. */}
                        {/* <a =href=''/>를 대신해서 <Link/> 를 사용한다.*/}
                        <li>    <Link to='/'>Home</Link>   </li>
                        <li>    <Link to='/about'>About</Link>    </li>
                        <li>    <Link to='/ceo'>ceo</Link>    </li>
                        <li>    <Link to='/sub01'>sub01</Link>    </li>
                    </ul>
                </nav>
                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Home />}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/ceo' element={<Ceo/>}></Route>
                    <Route path='/sub01' element={<Sub01/>}></Route>
                    <Route path='*' element={<NotFiles/>}></Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App01;