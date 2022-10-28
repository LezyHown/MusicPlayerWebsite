import React from "react";

import style from './search.module.css';

import Icon from '../../icons/IconManager';

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
                    <input placeholder="Songs, Artist, Podcasts" type="text"
                    style={{ '--search-icon': 'https://miro.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png' }}/>
                </div>

                <h3 style={{fontWeight: '500', paddingTop: '2rem'}}>Your Top Genre</h3>

                
            </div>
        </div>
    );
}

export default Search;