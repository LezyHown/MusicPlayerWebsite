import React from "react";

import style from './home.module.css';

import MusicCategory from "../MusicCategory/MusicCategory";

import { ReactComponent as HistoryIcon } from './images/icons/history.svg';
import { ReactComponent as NotificationIcon } from './images/icons/notification.svg';
import { ReactComponent as SettingsIcon } from './images/icons/settings.svg';
import { ReactComponent as CircleIcon } from './images/icons/circle.svg';

import AcousticImg from './images/categories/acoustic.png';
import ElectronicImg from './images/categories/electronic.png';
import RomanticImg from './images/categories/romantic.png';
import HipHopImg from './images/categories/hiphop.png';
import GlobalTopImg from './images/categories/globaltop.png';

import OldMusicImg from './images/categories/oldmusic.jpg';
import PopMusicImg from './images/categories/pop.jpg';
import OldHitsImg from './images/categories/cassettes.jpg';
import LiveMusicImg from './images/categories/live.jpg';
import ConanGrayImg from './images/categories/conangray.jpg';
import PlayboiCartiImg from './images/categories/playboicarti.jpg';

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

                <div className={style.categ_container}>
                    <MusicCategory data={[
                        { title: 'Library', height: '5rem', icon: <CircleIcon/> },
                        { title: 'Acoustic', height: '5rem', img_src: AcousticImg },
                        { title: `Electronic`, height: '5rem', img_src: ElectronicImg },
                        { title: 'Romantic', height: '5rem', img_src: RomanticImg },
                        { title: 'Hip-Hop', height: '5rem', img_src: HipHopImg },
                        { title: 'Global Top', height: '5rem', img_src: GlobalTopImg }
                    ]}/>
                </div>
                
                <div className={style.categ_container}>
                    <MusicCategory title='Shows to try' data={[
                        { title: 'Old is Gold', img_src: OldMusicImg },
                        { title: 'Pop Hits', img_src: PopMusicImg },
                        { title: `90's Hits`, img_src: OldHitsImg }
                    ]}/>
                </div>

                <div className={style.categ_container}>
                    <MusicCategory title='Your Top Mixes' data={[
                        { title: 'Live Music', img_src: LiveMusicImg },
                        { title: 'Conan Gray', img_src: ConanGrayImg },
                        { title: `Playboi Carti`, img_src: PlayboiCartiImg }
                    ]}/>
                </div>
            </div>
        </div>
    );
}

export default Home;