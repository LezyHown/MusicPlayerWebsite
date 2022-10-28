import React from "react";

import style from './categories-container.module.css';

let isShort = false;

/* 
    Title - Заголовок над контейнером
    arr - массив из блоков категорий с настройкой их содержимого
    с свойствами, пример одного блока в массиве:
    [{
      title: название внутри блока, 
      img_src: адрес картинки, 
      height: высота (при смене переключается в режим isShort),
      icon: иконка в типе компонента ReactComponent
    }]
    border - обводка вокруг текста
    _width - ширина каждого блока
*/
function CategoriesContainer({title, arr, border, _width}){
    let Items = arr.map( item => {
        isShort = item.height !== undefined;

        return (
            <div key={item.title} className={style.category_item} 
                style={{backgroundImage: `url(${ item.img_src })`, height: item.height ?? '17rem', alignItems: isShort ? 'center' : 'flex-end', width: _width ?? '17rem'  }}>
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
                <h3 className={isShort ? style.light_title : style.title}>
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