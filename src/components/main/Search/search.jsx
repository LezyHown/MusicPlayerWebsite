import React from "react";

import style from './search.module.scss';

import Icon from '../../IconManager/IconManager';
import MusicCategory from "../MusicCategory/MusicCategory";

function AddIcons(Categories, Name){
    return Categories.map(c => c.map(i => i['icon'] = Name))
}

function Search(props){
    AddIcons([props.Data.Rock, props.Data.Edm, props.Data.Mixes], 'Play');

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
                
                <MusicCategory title="Rock" data={props.Data.Rock} height="5rem" border={true}/>
                <MusicCategory title="EDM" data={props.Data.Edm} height="5rem" border={true}/>
                <MusicCategory data={props.Data.Mixes} width="20.5rem" border={true}/>
            </div>
        </div>
    );
}

export default Search;