import React from "react";

import style from './RadioButtons.module.css';

function RadioButtons(props){
    let buttons = [];

    for(let i = 0; i < props.names.length; ++i){
        let _id = props.Key + (i + 1).toString(), 
            _name = props.names[i], 
            current = _name === props.default;

        buttons.push(<input key={_id} type="radio" name="none" id={_id} checked={current} onChange={() => null}/>)
        buttons.push(<label key={_id + `${i}`} htmlFor={_id} onClick={() => props.setCurrent(_name)}>{_name}</label>)
    }

    return (
        <form className={style.form}>
            {buttons}
        </form>
    );
}

export default RadioButtons;