import React from "react";

import style from './CreatePlaylistBox.module.css'

function CreatePlaylistBox() {
    return (
        <div className={style.inputBox}>
            <div className={style.container}>
                <input placeholder="Playlist Name"/>
                <hr/>
                <button type="button">Create Playlist</button>
            </div>
        </div>
    )
}

export default CreatePlaylistBox;