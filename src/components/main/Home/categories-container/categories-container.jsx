import React from "react";

import style from './categories-container.module.css';

let isShort = false;

function CategoriesContainer({title, arr, border}){
    let Items = arr.map( item => {
        isShort = item.height !== undefined;

        return (
            <div key={item.title} className={style.category_item} 
                style={{backgroundImage: `url(${ item.img_src })`, height: item.height ?? '17rem', alignItems: isShort ? 'center' : 'flex-end'  }}>
                {
                    item.icon !== undefined ?
                    <div className={style.icon} style={{ marginBottom: !isShort ? '0.5rem' : '0' }}>
                        {item.icon}
                    </div> : ''
                }
                <span className={style.title} style={{ textShadow: border === "true" ? '2px 0 rgb(0, 0, 0), -2px 0 rgb(0, 0, 0), 0 2px rgb(0, 0, 0), 0 -2px rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px rgb(0, 0, 0), 1px -1px rgb(0, 0, 0), -1px 1px rgb(0, 0, 0)' : '' }}>
                    {item.title}
                </span>
            </div>
        )
    });
    
    return (
        <div className={style.categories_container}>
            {
                title !== undefined ?
                <h3 className={isShort ? style.title + style.light_title : style.title}>
                    {title}
                </h3>: ''
            }

            <div className={style.container}>
                {Items}
            </div>
        </div>
    )
}

export default CategoriesContainer;