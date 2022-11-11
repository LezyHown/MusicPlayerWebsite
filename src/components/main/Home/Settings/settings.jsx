import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import Icon from "../../../IconManager/IconManager";
import RadioButtons from "./RadioButtons/RadioButtons";

import style from './settings.module.css';
import ToogleSwitch from "./ToogleSwitch/toogleswitch";

function Settings(props){
    let settings = props.Data;
    const [update, setUpdate] = React.useState('');

    return (
        <div className={style.settings}>
            <div className={style.__container}>
                <div className={style.start_container}>
                    <Link to="/Home">
                        <Icon name="Back"/>
                    </Link>
                    
                    <div className={style.title_container}>
                        <Icon name='Settings'></Icon>
                        <h3 className={style.title}>Settings</h3>
                    </div>
                </div>

                <div className={style.subscr_block}>
                    <span className={style.title}>Subscribtion</span>
                    <span className={style.term_header}>Free (Lifetime)</span>
                </div>

                <div className={style.subcontainer}>
                    <div className={style.block}>
                        <span className={style.title}>Data Saver</span>
                        <ToogleSwitch checked={settings.data.saver} setChange={(value) => settings.setSaver(value)}/>
                    </div>
                    <Icon name='Hr'/>
                    <div className={style.block}>
                        <span className={style.title}>3D Audio</span>
                        <ToogleSwitch checked={settings.data.audio3D} setChange={(value) => settings.setAudio3D(value)}/>
                    </div>
                </div>

                <div className={style.bottcontainer}>
                    <span className={style.title}>Notification</span>
                    { React.useMemo(() => 
                        <RadioButtons
                            Key='Notifications'
                            names={ ['Enable', 'Disable'] } 
                            setCurrent={(name) => { 
                                settings.setNotif(name)
                                setUpdate(name)
                            }} 
                            default={settings.data.notif}
                        />, [settings.data.notif]) 
                    }

                    <span className={style.separ_header}>Storage</span>

                    <span className={style.title}>Music Quality</span>
                    { React.useMemo(() => 
                        <RadioButtons 
                            Key='MusicQuality'
                            names={ ['Low', 'Medium', 'High', 'Ultra High'] } 
                            setCurrent={(name) => { 
                                settings.setQuality(name)
                                setUpdate(name)
                            }} 
                            default={settings.data.quality}
                        />, [settings.data.quality]) 
                    }
                </div>
                
                <div className={style.btn_container}>
                    <button className={style.logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Settings;