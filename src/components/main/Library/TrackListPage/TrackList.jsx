import React from "react";
import { Link, useParams } from "react-router-dom";
import Icon from "../../../IconManager/IconManager";

import style from './TrackList.module.css';
import Track from '../ItemContainer/ItemContainer';

function TrackList(props) {
    const {id} = useParams();

    let playlist = props.Data[id] ?? { data: [] }, isExist = playlist.data.length > 0;

    return (
      <div className={style.track_list}>
        <div className={style.__container}>
          <div className={style.start_container}>
            <Link to="/Library">
              <Icon name="Back" />
            </Link>
            <h3 className={style.title}>{isExist ? playlist.title : 'No title'}</h3>
          </div>

          <div className={style.controls}>
            <button type="button" className={style.play}>
              <Icon name="BigPlay" />
            </button>
            <button type="button" className={style.mixedplay}>
              <Icon name="MixedPlay" />
            </button>
          </div>

          <div className={style.track_container}>
            { isExist ? 
              playlist.data.map((track) => (
                  <Track
                    isTrack={true}
                    title={track.title}
                    img_src={track.img}
                    subtitle={track.subtitle}
                  />
              )) : <h1 className={style.title}>Playlist is empty...</h1>}
          </div>
        </div>
      </div>
    );
}

export default TrackList;