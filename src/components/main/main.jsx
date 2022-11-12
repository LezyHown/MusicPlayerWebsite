import React from "react";

import { Route, Routes } from 'react-router-dom';

import style from './main.module.css';

import Home from './Home/home';
import Search from './Search/search';
import Library from './Library/library';
import TrackList from "./Library/TrackListPage/TrackList";
import Settings from "./Home/Settings/settings";

function Main(props){
    return (
        <div className={style.main}>
            <Routes>
                <Route path="/"  element={<Home Data={props.Data.Home}/>}/>
                
                <Route path="Home" element={<Home Data={props.Data.Home}/>}/>
                <Route path="Search" element={<Search Data={props.Data.Search}/>}/>
                <Route path="Library" element={<Library Data={props.Data.Library}/>}/>
                <Route path="Tracklist/:id" element={<TrackList Data={props.Data.Tracks}/>}></Route>
                <Route path="Home/Settings" element={<Settings Data={props.Data.Settings}/>}/>
            </Routes>
        </div>
    );
}

export default Main;