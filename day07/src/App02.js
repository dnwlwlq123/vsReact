import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './page02/NavBar';
import Home from './page02/Home';
import About from './page02/About';
import Sub01 from './page02/Sub01';
import NotFiles from './page02/NotFiles';
import Ceo from './page02/Ceo';
import './css/style02.css';
const App02 = () => {
    return (
        <BrowserRouter>
            <>
                <NavBar/>  
                {/* 화면에 보이는 역역 */}
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

export default App02;