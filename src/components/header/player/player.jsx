import React from "react";
import Icon from "../../IconManager/IconManager";
import ContextData from "../../main/Redux/context";

import mini from './style/player.module.scss';
import full from './style/fullscreen_player.module.scss';
import { Link, useNavigate } from "react-router-dom";

function Player () {
    const navigate = useNavigate();
    const data = React.useContext(ContextData);
    const [style, setStyle] = React.useState(full), [update, setUpdate] = React.useState(false);

    React.useMemo(() => setStyle(data.player.fullscreen ? full : mini), [update]);

    return (
        <div className={style.player}>
            <div className={style.container}>
                { data.player.fullscreen ? 
                <div className={style.back} onClick={() => { 
                    data.player.Switch();
                    setUpdate(!update);
                    navigate(-1);
                }}>
                    <Icon name='Back'/>
                </div> : null
                }
                <Link to='Player'>
                    <img className={style.song_img} alt="song" src={data.player.img_src}
                        onClick={!data.player.fullscreen ? () => { 
                            data.player.Switch();
                            setUpdate(!update);
                        }: null}
                    />
                </Link>
                
                <h4 className={style.song_title}>Music Playing</h4>
                <span className={style.song_artist}>Artist</span>
                
                <div className={style.progressbar}>
                    <div className={style.progress} style={{ width: data.player.progress}}></div>
                </div>

                <div className={style.buttons_container}>
                    { data.player.fullscreen ? <Icon name='MixedPlay'/> : null }

                    <div className={style.smaller}><Icon name='PlayerBack'/></div>
                    {!data.player.state ? <Icon name='PlayerPlay'/> : <Icon name='PlayerPause'/>}
                    <div className={style.smaller}><Icon name='PlayerNext'/></div>
                    
                    { data.player.fullscreen ? <Icon name='PlayerRepeat'/> : null }
                </div>
                { data.player.fullscreen ? <Icon name='PlayerTV'/> : null }
            </div>
        </div>
    );
}

export default Player;