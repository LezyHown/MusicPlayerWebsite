import React from "react";

import style from './toogleswitch.module.scss';

function ToogleSwitch(props){
    return (
        <label className={style.toogle_switch}>
            <input type="checkbox" checked={props.checked} onChange={(e) => props.setChange(e.currentTarget.checked)}/>
            <span className={style.slider}></span>
        </label>
    );
}

export default ToogleSwitch;