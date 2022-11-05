import React from "react";

import { Route, Routes } from 'react-router-dom';

import style from './main.module.css';

import Home from './Home/home';
import Search from './Search/search';
import Library from './Library/library';
import TrackList from "./Library/TrackListPage/TrackList";

function Main(props){
    return (
        <div className={style.main}>
            <Routes>
                <Route path="/" element={<Home Data={props.Data}/>}/>
                
                <Route path="Home" element={<Home Data={props.Data}/>}/>
                <Route path="Search" element={<Search Data={props.Data}/>}/>
                <Route path="Library" element={<Library Data={props.Data}/>}/>
                <Route path="Tracklist" element={<TrackList Data={props.Data}/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;