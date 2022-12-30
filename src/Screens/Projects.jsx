import React from "react";
import { projectdata } from "../JsonData/projectsdata";
import "../StyleSheet/Projects.css";

const Projects = () => {
  return (
    <div id='projects' className="proj">
        <p className="projTitle">Projects</p>
      <div className="projCont">
      {projectdata.map((item, id) => {
        return (
          <div className={item.id===2? 'card2 projCard':item.id===1? 'card1 projCard' : 'card0 projCard'} key={item.id}>
            <p className="text projHead">{item.name}</p>
            <p className="text projText">
              {item.text}
            </p>
            <button className="btn effect" onClick={()=>window.open(`${item.webLink}`,'_blank')}>Link↗</button>
          </div>
        );
      })}
      </div>
      <p className="projMsg">Hover the cards</p>
    </div>
  );
};

export default Projects;
