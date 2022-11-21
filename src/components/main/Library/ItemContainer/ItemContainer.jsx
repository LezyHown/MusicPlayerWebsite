import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../IconManager/IconManager";

import style from './ItemContainer.module.css'

function ItemContainer(props) {
    return (
        <div className={style.item_container}>
            <Link to={`/Tracklist/${props.id}`} className={style.link}>
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
            </Link>
            
            
            { props.canRemoved &&
                <div className={style.remove} onClick={() => props.RemovePlaylist(props.id)}>
                    <Icon name='Remove'/>
                </div>
            }
        </div>
    )
}

export default ItemContainer;