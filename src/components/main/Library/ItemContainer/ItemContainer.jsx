import React from "react";

import style from './ItemContainer.module.css'

function ItemContainer(props) {
    return (
        <div className={style.item_container}>
            <div className={style.visual_container}>
            {
                props.icon !== undefined ? 
                props.icon : <img alt={props.title + '-image'} src={props.img_src}/>
            }
            </div>
            
            <span className={style.title}>
                {props.title}
            </span>

            <span className={style.second_title}>
                {props.second_title}
            </span>
        </div>
    )
}

export default ItemContainer;