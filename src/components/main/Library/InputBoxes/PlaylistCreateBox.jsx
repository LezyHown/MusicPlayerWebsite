import React from "react";

import style from './PlaylistCreateBox.module.css';

import $ from 'jquery';

function AddNewPlaylistItem(addItem, hideSelf) {
  let pTitle = $(`input`).val();

  if (pTitle.length >= 3) {
    addItem({ title: `${pTitle}`, icon: null });
    hideSelf();
  } else {
    let tooltip = $(`[class*='tooltip']`),
        input = $(`input`).get(0);
   
    // Появление предупреждения о некорректном вводе
    tooltip.get(0).style.opacity = "1";
    tooltip.fadeIn(250).delay(1800).fadeOut(100);

    input.style.color = "rgba(255, 0, 0, 0.5)";
    setTimeout(() => (input.style.color = "white"), 1200);
  }
}

function PlaylistCreateBox(props) {
    let Add = () => AddNewPlaylistItem(props.addItem, props.HideFunc);

    return (
        <div className={style.inputBox} onKeyDown={(e) => e.key === 'Enter' ? Add() : null}>
            <div className={style.container}>
                <input placeholder="Playlist Name"/>
                <span className={style.tooltip}>Имя должно быть длинее 2-х символов!</span>
                <hr/>
                <button type="button" onClick={() => Add()}>
                    Create Playlist
                </button>
            </div>
        </div>
    )
}

export default PlaylistCreateBox;