import React from "react";

import style from './search.module.css';

import Icon from '../../icons/IconManager';
import CategoriesContainer from "../Home/categories-container/categories-container";

import rroll_img from './images/rocknroll.jpg'; 
import rpunk_img from './images/punk.jpg'; 
import rmetal_img from './images/metal.jpg'; 
import efuturebass_img from './images/futurebass.jpg';
import efuturehouse_img from './images/futurehouse.jpg';
import ebasshouse_img from './images/basshouse.jpg';
import djmix_img from './images/djmixes.jpg';
import pmix_img from './images/partymix.jpg';

function Search(){
    return (
        <div className={style.search}>
            <div className={style.__container}>
                <div className={style.start_container}>
                    <h3 className={style.title}>Search</h3>
                    <Icon name="Camera"/>
                </div>
                
                <div className={style.search_input}>
                    <Icon name="Search"/>
                    <input placeholder="Songs, Artist, Podcasts" type="text"/>
                </div>

                <h3 style={{fontWeight: '500', paddingTop: '2rem'}}>Your Top Genre</h3>

                <div className={style.categ_container}>
                    <CategoriesContainer title="Rock" arr={[
                        { title: "Rock and Roll", img_src: rroll_img, height: "5rem", icon: <Icon name="Play"/> },
                        { title: "Punk Rock", img_src: rpunk_img, height: "5rem", icon: <Icon name="Play"/> },
                        { title: "Heavy Metal", img_src: rmetal_img, height: "5rem", icon: <Icon name="Play"/> },
                    ]} border="true"/>
                </div>
                
                <div className={style.categ_container}>
                    <CategoriesContainer title="EDM" arr={[
                        { title: "Future Bass", img_src: efuturebass_img, height: "5rem", icon: <Icon name="Play"/> },
                        { title: "Future House", img_src: efuturehouse_img, height: "5rem", icon: <Icon name="Play"/> },
                        { title: "Bass House", img_src: ebasshouse_img, height: "5rem", icon: <Icon name="Play"/> },
                    ]} border="true"/>
                </div>

                <div className={style.big_categ_container}>
                    <CategoriesContainer arr={[
                        { title: "Party Mix", img_src: pmix_img, icon: <Icon name="Play"/> },
                        { title: "DJ Mix", img_src: djmix_img, icon: <Icon name="Play"/> },
                    ]} border="true" _width="20.5rem"/>
                </div>
            </div>
        </div>
    );
}

export default Search;