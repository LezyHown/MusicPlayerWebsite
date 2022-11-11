import React from "react";

import style from './toogleswitch.module.css';

function ToogleSwitch(props){
    const [checked, setChecked] = React.useState(props.checked);

    return (
        <label className={style.toogle_switch}>
            <input type="checkbox" checked={checked} onChange={() => 
            { 
                setChecked(!checked);
                props.setChange(!checked);
            }}/>
            <span className={style.slider}></span>
        </label>
    );
}

export default ToogleSwitch;