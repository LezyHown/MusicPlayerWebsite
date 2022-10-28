import React from "react";

import style from './item-container.module.css'

function ItemContainer({src_img, icon, title, second_title}) {
    return (
        <div className={style.item_container}>
            {
                icon !== undefined ? icon : <img alt={title + '-image'} src={src_img}/>
            }
            <span className={style._title}>{title}</span>
            <span className={style._second_title}>{second_title}</span>
        </div>
    )
}

export default ItemContainer;