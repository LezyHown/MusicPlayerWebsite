import React from "react";

import Icon from "../../IconManager/IconManager";
import CreatePlaylistBox from "./InputBoxes/CreatePlaylistBox";
import ItemContainer from "./ItemContainer/ItemContainer";

import style from './library.module.css';

function Library(props){
    let index = 1;
    let libraryContainers = props.Data.Library.map(i => index++ === 1 ? 
        <ItemContainer key={index} title={i.title} icon={<Icon name='GreenHeart'/>}/> :
        <ItemContainer key={index} title={i.title} img_src={i.img_src}/> 
    );

    return (
        <div className={style.library}>
            <div className={style.__container}>
                {/* <CreatePlaylistBox/> */}

                <div className={style.start_container}>
                    <h3 className={style.title}>Your Library</h3>
                    <Icon name="Search"/>
                </div>

                {libraryContainers}

                <div className={style.btn_container}>
                    <button type="button">Create Playlist</button>
                </div>
            </div>
        </div>
    );
}

export default Library;