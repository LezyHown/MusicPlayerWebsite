import React from "react";

import Icon from "../../IconManager/IconManager";
import PlaylistCreateBox from "./InputBoxes/PlaylistCreateBox";
import ItemContainer from "./ItemContainer/ItemContainer";

import AwayListener from "@mui/base/ClickAwayListener";

import style from "./library.module.css";

function Library(props) {
  let index = 1;
  const [createBoxVisible, setCreateBoxVisible] = React.useState(false);
  const [libraryItems, setItems] = React.useState(props.Data.Library);

  return (
    <div className={style.library}>
      <div className={style.__container}>
        <div className={style.start_container}>
          <h3 className={style.title}>Your Library</h3>
          <Icon name="Search" />
        </div>

        {libraryItems.map((i) =>
          i.hasOwnProperty("icon") ? (
            <ItemContainer
              key={++index}
              title={i.title}
              icon={<Icon name={i.icon} />}
            />
          ) : (
            <ItemContainer key={++index} title={i.title} img_src={i.img_src} />
          )
        )}

        <AwayListener onClickAway={() => setCreateBoxVisible(false)}>
          <div className={style.btn_container}>
            <button
              type="button"
              className={style.create_btn}
              onClick={() => setCreateBoxVisible(true)}
            >
              Create Playlist
            </button>

            {createBoxVisible ? (
              <PlaylistCreateBox
                addItem={(item) => setItems([...libraryItems, item])}
                HideFunc={() => setCreateBoxVisible(false)}
              />
            ) : null}
          </div>
        </AwayListener>
      </div>
    </div>
  );
}

export default Library;
