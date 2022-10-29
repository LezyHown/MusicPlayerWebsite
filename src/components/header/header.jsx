import React from "react";

import {Link, useLocation} from 'react-router-dom';

import style from './header.module.css';

import EmptySongImg from './images/emptysong.png';
import Player from "./player/player";

import Icon from '../icons/IconManager';

const rect_active_page = <div className={style.rect_active_page} style={{
    position: "absolute",
    background: "#D0BB00",
    width: "11px", height: "30px",
    left: "-1px"
}} />;

function Header(){
    const location = useLocation();

    return (
        <div className={style.header}>
            <div className={style.navigation_container}>
                <Link to='/HomePage' className={style.nav_link}>
                    {/Home/.test(location.pathname) || location.pathname.length === 1 ? rect_active_page : ''}
                    {<Icon name="Home"/>}
                    <span className={style.name}>Home</span>
                </Link>

                <Link to='/SearchPage' className={style.nav_link}>
                    {/Search/.test(location.pathname) ? rect_active_page : ''}
                    {<Icon name="Search"/>}
                    <span className={style.name}>Search</span>
                </Link>

                <Link to='/LibraryPage' className={style.nav_link}>
                    {/Library/.test(location.pathname) ? rect_active_page : ''}
                    {<Icon name="Library"/>}
                    <span className={style.name}>Library</span>
                </Link>
            </div>

            <div className={style.player_container}>
                <img className={style.song_img} alt="song" src={EmptySongImg}/>
                
                <h4 className={style.song_title}>Music Playing</h4>
                <span className={style.song_artist}>Artist</span>
                
                {/* ----------------Player-----------------------
                    pstate это состояние плеера, включен-выключен, 
                    pwidth на каком проценте сейчас трек  
                */}
                <Player pwidth="10%" pstate="false"/>
            </div>
        </div>
    );
}

export default Header;