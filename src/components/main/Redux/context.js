import React from "react";

import PlayerImg from '../../Images/Player/emptysong.png';

const ContextData = React.createContext(null);

export const data = {
    settings: { notif: 'Enable', quality: 'Ultra High', audio3D: true, theme: false },
    player: { fullscreen: false, state: false, progress: '15%', img_src: PlayerImg, Switch }
};

function Switch() { 
    data.player.fullscreen = !data.player.fullscreen 
} 

export default ContextData;