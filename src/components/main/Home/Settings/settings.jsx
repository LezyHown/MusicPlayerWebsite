import React from "react";

import darkTheme from './style/settings.module.scss';
import whiteTheme from './style/settings_white.module.scss';
import { Link } from "react-router-dom";

import Icon from "../../../IconManager/IconManager";
import RadioButtons from "./RadioButtons/RadioButtons";
import ToogleSwitch from "./ToogleSwitch/toogleswitch";

import ContextData from '../../Redux/context';

function Settings(){
    const [style, setStyle] = React.useState(darkTheme);
    const data = React.useContext(ContextData);
    const [update, setUpdate] = React.useState(false);

    React.useMemo(() => setStyle(!data.settings.theme ? darkTheme : whiteTheme), [data.settings.theme]);

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
                        <span className={style.title}>{data.settings.theme ? 'White' : 'Dark'} Theme</span>
                        <ToogleSwitch checked={data.settings.theme} setChange={(value) => {
                            data.settings.theme = value
                            setUpdate(!update)
                        }}/>
                    </div>
                    <Icon name='Hr'/>
                    <div className={style.block}>
                        <span className={style.title}>3D Audio</span>
                        <ToogleSwitch checked={data.settings.audio3D} 
                        setChange={(value) => {
                            data.settings.audio3D = value;
                            setUpdate(!update)
                        }}/>
                    </div>
                </div>

                <div className={style.bottcontainer}>
                    <span className={style.title}>Notification</span>
                    <RadioButtons
                        names={ ['Enable', 'Disable'] } 
                        setCurrent={(name) => { 
                            data.settings.notif = name;
                            setUpdate(!update)
                        }} 
                        default={data.settings.notif}
                    />
                    <span className={style.separ_header}>Storage</span>

                    <span className={style.title}>Music Quality</span>
                    <RadioButtons
                        names={ ['Low', 'Medium', 'High', 'Ultra High'] } 
                        setCurrent={(name) => { 
                            data.settings.quality = name;
                            setUpdate(!update)
                        }} 
                        default={data.settings.quality}
                    />
                </div>
                
                <div className={style.btn_container}>
                    <button className={style.logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Settings;