import rroll_img from '../../Images/MusicCategories/rocknroll.jpg'; 
import rpunk_img from '../../Images/MusicCategories/punk.jpg'; 
import rmetal_img from '../../Images/MusicCategories/metal.jpg'; 
import efuturebass_img from '../../Images/MusicCategories/futurebass.jpg';
import efuturehouse_img from '../../Images/MusicCategories/futurehouse.jpg';
import ebasshouse_img from '../../Images/MusicCategories/basshouse.jpg';
import djmix_img from '../../Images/MusicCategories/djmixes.jpg';
import pmix_img from '../../Images/MusicCategories/partymix.jpg';
import acoustic_img from '../../Images/MusicCategories/acoustic.png';
import electronic_img from '../../Images/MusicCategories/electronic.png';
import romantic_img from '../../Images/MusicCategories/romantic.png';
import hiphop_img from '../../Images/MusicCategories/hiphop.png';
import globaltop_img from '../../Images/MusicCategories/globaltop.png';
import oldmusic_img from '../../Images/MusicCategories/oldmusic.jpg';
import popmusic_img from '../../Images/MusicCategories/pop.jpg';
import oldhits_img from '../../Images/MusicCategories/cassettes.jpg';
import livemusic_img from '../../Images/MusicCategories/live.jpg';
import conangray_img from '../../Images/MusicCategories/conangray.jpg';
import playboicarti_img from '../../Images/MusicCategories/playboicarti.jpg';

import { ReactComponent as HistoryIcon } from '../../Images/Icons/history.svg';
import { ReactComponent as NotificationIcon } from '../../Images/Icons/notification.svg';
import { ReactComponent as SettingsIcon } from '../../Images/Icons/settings.svg';

let state = {
    Rock:[
        { title: "Rock and Roll", img_src: rroll_img },
        { title: "Punk Rock", img_src: rpunk_img },
        { title: "Heavy Metal", img_src: rmetal_img }
    ],
    Edm:[
        { title: "Future Bass", img_src: efuturebass_img },
        { title: "Future House", img_src: efuturehouse_img },
        { title: "Bass House", img_src: ebasshouse_img },
    ],
    Mixes:[
        { title: "Party Mix", img_src: pmix_img },
        { title: "DJ Mix", img_src: djmix_img},
    ],
    HomeCategories:[
        { title: `Library` },
        { title: `Acoustic`, img_src: acoustic_img },
        { title: `Electronic`, img_src: electronic_img },
        { title: `Romantic`, img_src: romantic_img },
        { title: `Hip-Hop`, img_src: hiphop_img },
        { title: `Global Top`, img_src: globaltop_img }
    ],
    HomeCategories2: [
        { title: `Old is Gold`, img_src: oldmusic_img },
        { title: `Pop Hits`, img_src: popmusic_img },
        { title: `90's Hits`, img_src: oldhits_img }
    ],
    HomeCategories3: [
        { title: `Live Music`, img_src: livemusic_img },
        { title: `Conan Gray`, img_src: conangray_img },
        { title: `Playboi Carti`, img_src: playboicarti_img }
    ],
    HomeIcons:[
        <NotificationIcon key={1}/>,
        <HistoryIcon key={2}/>,
        <SettingsIcon key={3}/>
    ],
    Library:[
        { title: 'Liked' },
        { title: 'Favorites', img_src: conangray_img },
        { title: 'Playlist #1', img_src: ebasshouse_img },
        { title: 'Playlist #2', img_src: playboicarti_img },
        { title: 'Playlist #3', img_src: djmix_img },
    ]
};

export default state;