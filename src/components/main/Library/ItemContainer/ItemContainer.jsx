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
            
            <div className={style.titles_container} style={{alignSelf: props.isTrack && 'flex-end'}}>
                <span className={style.title}>
                    {props.title}
                </span>
                <span className={style.subtitle}>
                    {props.subtitle}
                </span>
            </div>
        </div>
    )
}

export default ItemContainer;