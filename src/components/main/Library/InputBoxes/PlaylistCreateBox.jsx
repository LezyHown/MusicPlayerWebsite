import React from "react";

import style from './PlaylistCreateBox.module.css';

function AddNewPlaylistItem(addItem, hide, name){
    if(name.length >= 3){
        addItem({title: `${name}`, icon: null });
        hide();
    }else{
        alert('Имя должно быть длинее 2-х символов!');
    }
}

function PlaylistCreateBox(props) {
    const [playlistName, setPlaylistName] = React.useState("");

    let Add = () => AddNewPlaylistItem(props.addItem, props.HideFunc, playlistName);

    return (
        <div className={style.inputBox} onKeyDown={(e) => e.key === 'Enter' ? Add() : null}>
            <div className={style.container}>
                <input placeholder="Playlist Name" onChange={(e) => setPlaylistName(e.target.value)}/>
                <hr/>
                <button type="button" onClick={() => Add()}>
                    Create Playlist
                </button>
            </div>
        </div>
    )
}

export default PlaylistCreateBox;