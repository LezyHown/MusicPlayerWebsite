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

export function RemovePlaylist(id){
    let arr = state.Library.data;

    let index = arr.indexOf(arr.filter(item => item.id.includes(id ?? ''))[0]);
    
    if(index >= 0)
        arr.splice(index, 1);
        
    return arr;
}

let state = {
    Home: {
        'Icons': [
            { icon: <Notification/> }, { icon: <History/> }, { icon: <Settings/>, link: 'Settings' }
        ],
        Categories: [
            [
                { title: `Library`, icon: 'Circle', link: '/Library' },
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
            { title: 'Liked', icon: 'GreenHeart', id: 'personal' },
            { title: 'Favorites', img_src: conangray_img, id: 'favorites' },
            { title: 'Playlist #1', img_src: ebasshouse_img, id: 'Playlist #1' }
        ],
        AddPlaylist, RemovePlaylist
    },
    Tracks:{ 
        'personal': { 
            title: 'Liked', 
            data:[ 
                { title: 'Baby Alone', subtitle: 'In a mi a ante volutpat', img: romantic_img },
                { title: 'Guitar Love', subtitle: 'Mauris volutpat dolor', img: livemusic_img },
                { title: 'Forever in my mind', subtitle: 'Praesent malesuada lacus', img: conangray_img },
                { title: 'Superstar', subtitle: 'Vestibulum ut nisi aliquet', img: rroll_img }
            ]
        },
        'favorites': { 
            title: 'Favorites', 
            data:[ 
                { title: 'Afro Americanec', subtitle: `I'm from India!`, img: 'https://i.pinimg.com/564x/a1/28/13/a128130ccffe1aec7a647e91ed33f2d4.jpg' },
                { title: 'Forever in my mind', subtitle: 'Praesent malesuada lacus', img: 'https://i.pinimg.com/564x/35/09/64/350964b9d0f8e073835d6923f12177ae.jpg' },
                { title: 'Superstar', subtitle: 'Vestibulum ut nisi aliquet', img: 'https://i.pinimg.com/564x/aa/d2/6d/aad26d7ca5b437c7d2a3a9da4870a421.jpg' },
                { title: 'Lambo', subtitle: 'Driving every day', img: 'https://i.pinimg.com/736x/4c/3a/a7/4c3aa7a7319bb22f8e2b33626982480b.jpg' },
                { title: 'Hear that little things', subtitle: 'Slime digital', img: 'https://i.pinimg.com/564x/c2/22/b5/c222b5bf1d10af0e507a9c686eec14e2.jpg' },
            ]
        }
    }
};

export default state;