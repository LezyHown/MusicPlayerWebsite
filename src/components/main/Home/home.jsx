import React from "react";

import style from './home.module.css';

import CategoriesContainer from "./categories-container/categories-container";

import { ReactComponent as HistoryIcon } from './images/icons/history.svg';
import { ReactComponent as NotificationIcon } from './images/icons/notification.svg';
import { ReactComponent as SettingsIcon } from './images/icons/settings.svg';
import { ReactComponent as CircleIcon } from './images/icons/circle.svg';

import AcousticImg from './images/icons/categories/acoustic.png';
import ElectronicImg from './images/icons/categories/electronic.png';
import RomanticImg from './images/icons/categories/romantic.png';
import HipHopImg from './images/icons/categories/hiphop.png';
import GlobalTopImg from './images/icons/categories/globaltop.png';

import OldMusicImg from './images/icons/categories/oldmusic.jpg';
import PopMusicImg from './images/icons/categories/pop.jpg';
import OldHitsImg from './images/icons/categories/cassettes.jpg';
import LiveMusicImg from './images/icons/categories/live.jpg';
import ConanGrayImg from './images/icons/categories/conangray.jpg';
import PlayboiCartiImg from './images/icons/categories/playboicarti.jpg';

function Home(){
    return (
        <div className={style.home}>
            <div className={style.__container}>
            <div className={style.start_container}>
                <h3 className={style.title}>Good morning</h3>

                <div className={style.icons_container}>
                    <NotificationIcon/>
                    <HistoryIcon/>
                    <SettingsIcon/>
                </div>
            </div>

            <CategoriesContainer arr={[
                { title: 'Library', height: '5rem', icon: <CircleIcon/> },
                { title: 'Acoustic', height: '5rem', img_src: AcousticImg },
                { title: `Electronic`, height: '5rem', img_src: ElectronicImg },
                { title: 'Romantic', height: '5rem', img_src: RomanticImg },
                { title: 'Hip-Hop', height: '5rem', img_src: HipHopImg },
                { title: 'Global Top', height: '5rem', img_src: GlobalTopImg }
            ]}/>
    
            <CategoriesContainer title='Shows to try' arr={[
                { title: 'Old is Gold', img_src: OldMusicImg },
                { title: 'Pop Hits', img_src: PopMusicImg },
                { title: `90's Hits`, img_src: OldHitsImg }
            ]}/>
            
            <CategoriesContainer title='Your Top Mixes' arr={[
                { title: 'Live Music', img_src: LiveMusicImg },
                { title: 'Conan Gray', img_src: ConanGrayImg },
                { title: `Playboi Carti`, img_src: PlayboiCartiImg }
            ]}/>
            </div>
        </div>
    );
}

export default Home;