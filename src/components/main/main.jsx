import React from "react";

import { Route, Routes } from 'react-router-dom';

import style from './main.module.css';

import HomePage from './Home/home';
import SearchPage from './Search/search';
import LibraryPage from './Library/library';

function Main(){
    return (
        <div className={style.main}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                
                <Route path="HomePage" element={<HomePage/>}/>
                <Route path="SearchPage" element={<SearchPage/>}/>
                <Route path="LibraryPage" element={<LibraryPage/>}/>
            </Routes>
        </div>
    );
}

export default Main;