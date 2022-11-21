import React from "react";

import darkTheme from "./style/home.module.css";
import whiteTheme from './style/home_white.module.css';

import MusicCategory from "../MusicCategory/MusicCategory";
import { Link } from "react-router-dom";
import ContextData from "../Redux/context";

export default function Home(props) {
  const [style, setStyle] = React.useState(darkTheme);
  const data = React.useContext(ContextData);

  const HomeIcons =  props.Data['Icons'].map((item, index = 1) => 
      <Link to={item.link} key={index++}>
        {item.icon}
      </Link>
  );

  React.useMemo(() => setStyle(!data.settings.theme ? darkTheme : whiteTheme), [data.settings.theme]);

  return (
    <div className={style.home}>
      <div className={style.__container}>
        <div className={style.start_container}>
          <h3 className={style.title}>Good morning</h3>

          <div className={style.icons_container}>
            {HomeIcons}
          </div>
        </div>

        <MusicCategory data={props.Data.Categories[0]} height="5rem" />
        <MusicCategory data={props.Data.Categories[1]} title="Shows to try" />
        <MusicCategory data={props.Data.Categories[2]} title="Your Top Mixes"/>
      </div>
    </div>
  );
}