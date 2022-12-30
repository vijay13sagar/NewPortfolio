import React from "react";
import "../StyleSheet/Common.css";
import '../StyleSheet/Home.css';
import HomeImg from "../Assets/mainhome.png";

const Home = () => {
  return (
    <div id='info' className="waveSection">
      <div className="hordiv">
        <div className="halfside">
          <p className="content">
            I'm a very energetic and self-motivated Front-end Developer located
            in Ontario, Canada. I love to work in any environment as it helps me
            gain more knowledge and experience.
            <br />
            <br /> Apart from academics, I always find myself with positive
            thinking. My Objective is: To enhance my knowledge and skills by
            working in a dynamic and stable workplace that provides job
            satisfaction and self-development while contributing to the
            organization's success.
            <br />
            <br />
            My dream is to grow along with the organization by using my
            knowledge to develop the organization. Interested in the entire
            Front-end spectrum and working on ambitious projects with positive
            people.
          </p>
          <p className="content">Let's Build...</p>
        </div>
        <div className="halfside noShow">
          <img className="infoimg" src={HomeImg} alt='mainhome'/>
        </div>
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
  );
};

export default Home;
