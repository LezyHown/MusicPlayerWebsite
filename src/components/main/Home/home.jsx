import React from "react";

import style from './home.module.css';

import MusicCategory from "../MusicCategory/MusicCategory";

function Home(props){
    props.Data.HomeCategories.filter(categ => categ.title === 'Library').map(c => c['icon'] = 'Circle');
    
    return (
        <div className={style.home}>
            <div className={style.__container}>
                <div className={style.start_container}>
                    <h3 className={style.title}>Good morning</h3>

                    <div className={style.icons_container}>
                        {props.Data.HomeIcons}
                    </div>
                </div>

                <MusicCategory data={props.Data.HomeCategories}  height='5rem'/>
                <MusicCategory data={props.Data.HomeCategories2} title='Shows to try'/>
                <MusicCategory data={props.Data.HomeCategories3} title='Your Top Mixes'/>
            </div>
        </div>
    );
}

export default Home;