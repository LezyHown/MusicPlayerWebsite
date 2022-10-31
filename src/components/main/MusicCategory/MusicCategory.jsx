import React from "react";
import Icon from '../../IconManager/IconManager';

import style from './MusicCategory.module.css';

let isShort = false;

const borderText = '2px 0 rgb(0, 0, 0), -2px 0 rgb(0, 0, 0), 0 2px rgb(0, 0, 0), 0 -2px rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px rgb(0, 0, 0), 1px -1px rgb(0, 0, 0), -1px 1px rgb(0, 0, 0)';

/* 
    Title - Заголовок над контейнером
    data - массив из блоков категорий с настройкой их содержимого
    с свойствами, пример одного блока в массиве:
    [{
      title: название внутри блока, 
      img_src: адрес картинки, 
      icon: иконка в типе компонента ReactComponent
    }]
    border - обводка вокруг текста
    width - ширина каждого блока
    height: высота каждого блока (при смене переключается в режим isShort)
*/
function MusicCategory(props)
{
    isShort = props.height !== undefined;

    let Items = props.data.map(item => 
        <div key={item.title} className={style.category_item} 
            style={{
                backgroundImage: `url(${ item.img_src })`, 
                height: props.height ?? '17rem', 
                width: props.width ?? '17rem', 
                alignItems: isShort ? 'center' : 'flex-end'
            }}>
            {
                item.icon !== undefined ?
                <div className={style.icon} style={{ marginBottom: !isShort ? '0.5rem' : '0' }}>
                    <Icon name={item.icon}/>
                </div> : ''
            }
            <span className={style.title} style={{ 
                textShadow: props.border ? borderText : '' }}>
                {item.title}
            </span>
        </div>
    );
    
    return (
        <div className={style.category_container}>
            {
                props.title !== undefined ?
                <h3 className={isShort ? style.light_title : style.title}>
                    {props.title}
                </h3>: ''
            }

            <div className={style.items_container}>
                {Items}
            </div>
        </div>
    )
}

export default MusicCategory;