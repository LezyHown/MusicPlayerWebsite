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

import { ReactComponent as History } from '../../Images/Icons/history.svg';
import { ReactComponent as Notification } from '../../Images/Icons/notification.svg';
import { ReactComponent as Settings } from '../../Images/Icons/settings.svg';

export function AddPlaylist(playlist){
    state.Library.data.push(playlist);
}

export function setNotif(value){
    state.Settings.data.notif = value;
}

export function setQuality(value){
    state.Settings.data.quality = value;
}

export function setSaver(value){
    state.Settings.data.saver = value;
}

export function setAudio3D(value){
    state.Settings.data.audio3D = value;
}

let state = {
    Home: {
        'Icons': [
            { icon: <Notification/> }, { icon: <History/> }, { icon: <Settings/>, link: 'Settings' }
        ],
        Categories: [
            [
                { title: `Library` },
                { title: `Acoustic`, img_src: acoustic_img },
                { title: `Electronic`, img_src: electronic_img },
                { title: `Romantic`, img_src: romantic_img },
                { title: `Hip-Hop`, img_src: hiphop_img },
                { title: `Global Top`, img_src: globaltop_img }
            ],
            [
                { title: `Old is Gold`, img_src: oldmusic_img },
                { title: `Pop Hits`, img_src: popmusic_img },
                { title: `90's Hits`, img_src: oldhits_img }
            ],
            [
                { title: `Live Music`, img_src: livemusic_img },
                { title: `Conan Gray`, img_src: conangray_img },
                { title: `Playboi Carti`, img_src: playboicarti_img }
            ]
        ]
    },
    Search:{
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
        ]
    },
    Library:{
        data: [
            { title: 'Liked', icon: 'GreenHeart' },
            { title: 'Favorites', img_src: conangray_img },
            { title: 'Playlist #1', img_src: ebasshouse_img }
        ],
        AddPlaylist
    },
    Tracks:[
        { title: 'Baby Alone', subtitle: 'Just Subtitle TEXT', img: romantic_img },
        { title: 'Guitar Love', subtitle: 'Just Subtitle TEXT #2', img: livemusic_img },
        { title: 'Forever in my mind', subtitle: 'Just Subtitle #3', img: conangray_img },
        { title: 'Superstar', subtitle: 'Just Subtitle TEXT #4', img: rroll_img },
    ],
    Settings:{
        data: { notif: 'Enable', quality: 'Ultra High', audio3D: true, saver: false },
        setNotif, setQuality, setAudio3D, setSaver
    },
};


export default state;