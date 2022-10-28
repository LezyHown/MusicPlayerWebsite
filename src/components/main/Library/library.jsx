import React from "react";

import style from './library.module.css';

function Library(){
    return (
        <div className={style.library}>
            <div className={style.__container}>
                <h3 className={style.title}>Library</h3>
            </div>
        </div>
    );
}

export default Library;