import React from "react";
import "../StyleSheet/Experience.css";
import "../StyleSheet/Common.css";
import { Expdata } from "../JsonData/experiencedata";

const Experience = () => {
  return (
    <div id="work" className="exp">
      <p className="expHeading">Experience</p>
      {Expdata.map((item, id) => {
        return (
          <div className="hordiv" key={item.id}>
            {item.title1 ? (
              <div className="righttracker">
                <div className="ball rightball"></div>
                {!item.year2 ? (
                  <p className="Indicator rightInd">{item.indicator}</p>
                ) : (
                  <p></p>
                )}
                <div className="expCard rightExp">
                  <div className="gradingdiv">
                    <p className="year">{item.year1}</p>
                    <p className="year">{item.grade}</p>
                  </div>

                  <div className="gradingdiv">
                    <p className="grade">{item.title1}</p>
                    <p className="grade">{item.levelOfEd}</p>
                  </div>
                  <p className="brief">{item.text1}</p>
                </div>
              </div>
            ) : (
              <div className="leftempty"></div>
            )}
            {item.title2 ? (
              <div className="tracker">
                <div className="ball leftball"></div>
                <p className="Indicator">{item.indicator}</p>
                <div className="expCard leftExp">
                  <p className="year">{item.year2}</p>
                  <div className="gradingdiv">
                    <p className="grade">{item.title2}</p>
                    <p className="grade">{item.company}</p>
                  </div>
                  <p className="brief">{item.text2}</p>
                </div>
              </div>
            ) : (
              <div className="rightempty"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
