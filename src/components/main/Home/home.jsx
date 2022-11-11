import React from "react";

import style from "./home.module.css";

import MusicCategory from "../MusicCategory/MusicCategory";
import { Link } from "react-router-dom";

function Home(props) {
  props.Data.Categories[0].filter((categ) => categ.title === "Library").map(c => {
      c["icon"] = "Circle";
      c["link"] = "/Library";
    }
  );

  let HomeIcons =  props.Data['Icons'].map((item, index = 1) => 
      <Link to={item.link} key={index++}>
        {item.icon}
      </Link>
  );

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

export default Home;
