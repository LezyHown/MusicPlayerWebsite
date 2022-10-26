import React from "react";

import {Link, useLocation} from 'react-router-dom';

import style from './header.module.css';

import EmptySongImg from './images/emptysong.png';
import Player from "./player/player";

const rect_active_page = <div className={style.rect_active_page} style={{
    position: "absolute",
    background: "#D0BB00",
    width: "11px", height: "30px",
    left: "-1px"
}} />;

function Header(){
    /* -----------------Иконки-------------------------------- */
    const HomeIcon = <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 28.6667H26.6667V13.63L15 4.55666L3.33333 13.63V28.6667H13.3333V18.6667H16.6667V28.6667ZM30 30.3333C30 30.7754 29.8244 31.1993 29.5118 31.5118C29.1993 31.8244 28.7754 32 28.3333 32H1.66667C1.22464 32 0.800716 31.8244 0.488156 31.5118C0.175595 31.1993 4.01184e-07 30.7754 4.01184e-07 30.3333V12.8167C-0.000175806 12.5627 0.0576953 12.312 0.169193 12.0838C0.280691 11.8556 0.442867 11.6559 0.643334 11.5L13.9767 1.13C14.2692 0.902404 14.6293 0.778839 15 0.778839C15.3707 0.778839 15.7308 0.902404 16.0233 1.13L29.3567 11.5C29.5571 11.6559 29.7193 11.8556 29.8308 12.0838C29.9423 12.312 30.0002 12.5627 30 12.8167V30.3333V30.3333Z" fill="white" />
    </svg>;
    const SearchIcon = <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0517 24.695L34.19 31.8317L31.8317 34.19L24.695 27.0517C22.0396 29.1804 18.7367 30.3382 15.3333 30.3333C7.05334 30.3333 0.333344 23.6133 0.333344 15.3333C0.333344 7.05334 7.05334 0.333344 15.3333 0.333344C23.6133 0.333344 30.3333 7.05334 30.3333 15.3333C30.3382 18.7367 29.1804 22.0396 27.0517 24.695ZM23.7083 23.4583C25.8235 21.2832 27.0048 18.3674 27 15.3333C27 8.88668 21.7783 3.66668 15.3333 3.66668C8.88668 3.66668 3.66668 8.88668 3.66668 15.3333C3.66668 21.7783 8.88668 27 15.3333 27C18.3674 27.0048 21.2832 25.8235 23.4583 23.7083L23.7083 23.4583V23.4583Z" fill="white" />
    </svg>;
    const LibraryIcon = <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 0.416656C26.93 0.416656 34.5833 8.06999 34.5833 17.5C34.5833 26.93 26.93 34.5833 17.5 34.5833C8.06999 34.5833 0.416656 26.93 0.416656 17.5C0.416656 8.06999 8.06999 0.416656 17.5 0.416656ZM17.5 24.3333C21.2805 24.3333 24.3333 21.2805 24.3333 17.5C24.3333 13.7194 21.2805 10.6667 17.5 10.6667C13.7194 10.6667 10.6667 13.7194 10.6667 17.5C10.6667 21.2805 13.7194 24.3333 17.5 24.3333ZM17.5 15.7917C18.4396 15.7917 19.2083 16.5604 19.2083 17.5C19.2083 18.4396 18.4396 19.2083 17.5 19.2083C16.5604 19.2083 15.7917 18.4396 15.7917 17.5C15.7917 16.5604 16.5604 15.7917 17.5 15.7917Z" fill="white" />
    </svg>;
    // ---------------------------------------------------------

    const location = useLocation();

    return (
        <div className={style.header}>
            <div className={style.navigation_container}>
                <Link to='/HomePage' className={style.nav_link}>
                    {/Home/.test(location.pathname) || location.pathname.length == 1 ? rect_active_page : ''}
                    {HomeIcon}
                    <span className={style.name}>Home</span>
                </Link>

                <Link to='/SearchPage' className={style.nav_link}>
                    {/Search/.test(location.pathname) ? rect_active_page : ''}
                    {SearchIcon}
                    <span className={style.name}>Search</span>
                </Link>

                <Link to='/LibraryPage' className={style.nav_link}>
                    {/Library/.test(location.pathname) ? rect_active_page : ''}
                    {LibraryIcon}
                    <span className={style.name}>Library</span>
                </Link>

                <img className={style.song_img} alt="empty-song" src={EmptySongImg}/>
            </div>

            <div className={style.player_container}>
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