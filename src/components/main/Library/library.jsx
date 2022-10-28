import React from "react";

import Icon from "../../icons/IconManager";
import CreatePlaylistBox from "./create-playlist-box/create-playlist-box";
import ItemContainer from "./item-container/item-container";

import style from './library.module.css';

function Library(){
    return (
        <div className={style.library}>
            <div className={style.__container}>
                <div className={style.start_container}>
                    <h3 className={style.title}>Your Library</h3>
                    <Icon name="Search"/>
                </div>

                <ItemContainer title="Liked" icon={<Icon name="GreenHeart"/>}/>
                <button onClick={<CreatePlaylistBox/>}>Create Playlist</button>
            </div>
        </div>
    );
}

export default Library;