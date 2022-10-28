import React from "react";

import style from './player.module.css';

import { ReactComponent as BackBtn } from './images/back.svg';
import { ReactComponent as PlayBtn } from './images/play.svg';
import { ReactComponent as PauseBtn } from './images/pause.svg';
import { ReactComponent as NextBtn } from './images/next.svg';
 
function Player (props) {
    let State = props.pstate  === "true" ? <PauseBtn/> : <PlayBtn/>;

    return (
        <div className={style.player}>
            <div className={style.progressbar}>
                <div className={style.progress} style={{ width: props.pwidth}}></div>
            </div>

            <div className={style.buttons_container}>
                <BackBtn/>
                {State}
                <NextBtn/>
            </div>
        </div>
    );
}

export default Player;