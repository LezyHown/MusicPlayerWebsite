import React from "react";

import style from './PlaylistCreateBox.module.css';

import $ from 'jquery';

function AddNewPlaylistItem(addItem, hideSelf, inputs) {
  if (inputs.title.length >= 3) {
    //Создание плейлиста
    inputs.img.length >= 6 ? addItem({ title: inputs.title, img_src: inputs.img }) : 
                             addItem({ title: inputs.title, icon: null });

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
    let inputTitle = React.createRef(), inputImg = React.createRef();
    
    let Add = () => AddNewPlaylistItem(props.addItem, props.HideFunc, 
      { title: inputTitle.current.value, img: inputImg.current.value }
    );

    return (
        <div className={style.inputBox} onKeyDown={(e) => e.key === 'Enter' ? Add() : null}>
            <div className={style.container}>
                <input placeholder="Playlist Name" ref={inputTitle}/>
                <span className={style.tooltip}>Имя должно быть длинее 2-х символов!</span>
                <input placeholder="Image Link" ref={inputImg}/>
                <hr/>
                <button type="button" onClick={() => Add()}>
                    Create Playlist
                </button>
            </div>
        </div>
    )
}

export default PlaylistCreateBox;