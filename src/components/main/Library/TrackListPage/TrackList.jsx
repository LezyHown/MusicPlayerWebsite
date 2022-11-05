import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../IconManager/IconManager";

import style from './TrackList.module.css';
import Track from '../ItemContainer/ItemContainer';

function TrackList(props) {
    let Tracks = props.Data.Tracks;
    
    return (
      <div className={style.track_list}>
        <div className={style.__container}>
          <div className={style.start_container}>
            <Link to="/Library">
              <Icon name="Back" />
            </Link>
            <h3 className={style.title}>Liked</h3>
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
            {[
              Tracks.map((t) => (
                <Track
                  isTrack={true}
                  title={t.title}
                  img_src={t.img}
                  subtitle={t.subtitle}
                />
              )),
              Tracks.map((t) => (
                <Track
                  isTrack={true}
                  title={t.title}
                  img_src={t.img}
                  subtitle={t.subtitle}
                />
              )),
            ]}
          </div>
        </div>
      </div>
    );
}

export default TrackList;