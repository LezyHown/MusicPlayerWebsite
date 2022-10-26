import React from "react";

import style from './categories-container.module.css';

function CategoriesContainer({title, arr}){
    let Items = arr.map( item => {
        return (
            <div key={item.title} className={style.category_item} 
                style={{backgroundImage: `url(${ item.img_src })`}}>
                <span className={style.title}>
                    {item.title}
                </span>
            </div>
        )
    });

    return (
        <div className={style.categories_container}>
            <h3 className={style.title}>{title}</h3>
            
            <div className={style.container}>
                {Items}
            </div>
        </div>
    )
}

export default CategoriesContainer;