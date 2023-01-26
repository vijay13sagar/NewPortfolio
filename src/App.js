import './App.css';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Home from './Screens/Home';
import Experience from './Screens/Experience';
import Contact from './Screens/Contact';
import Projects from './Screens/Projects';
import leftarr from './Assets/leftarr.svg';
import cross_icon from './Assets/cross_icon.svg';
import menu_icon from './Assets/menu_icon.svg';
import log from './Assets/log.png';
import './StyleSheet/Home.css';

function App() {
  const [show, setShow] = useState(false);
  const [isopen, setIsopen] = useState(false);

  const showIcon = () => {
    if (window.scrollY >= 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  window.addEventListener('scroll', showIcon);
  return (
    <div className="App">
      <div className='navbar'>
        <img className='logo' src={log} alt='logo' />
        <div className='navins'>
          <Link  to='info' smooth={true} duration={5000}><p className='navitem'>About</p></Link>
          <Link  to='work' smooth={true} duration={1000} ><p className='navitem'>Work</p></Link>
          <Link  to='projects' smooth={true} duration={1000}><p className='navitem'>Projects</p></Link>
          <Link  to='contact' smooth={true} duration={1500}><p className='navitem'>Contact</p></Link>
        </div>
        <div className='menuoption'>
        {isopen ? <img className='icon' src={cross_icon} onClick={() => { setIsopen(!isopen) }} alt='cross' /> : <img className='icon' src={menu_icon} onClick={() => { setIsopen(!isopen) }} alt='menuicon' />}
        </div>
        <div className={isopen ? 'ver' : 'nodisplay'} >
          <Link  to='info' smooth={true} duration={500}><div className='navitem' onClick={() => { setIsopen(false) }}>About</div></Link>
          <Link  to='work' smooth={true} duration={1000} ><div className='navitem' onClick={() => { setIsopen(false) }}>Work</div></Link>
          <Link  to='projects' smooth={true} duration={1000}><div className='navitem' onClick={() => { setIsopen(false) }}>Projects</div></Link>
          <Link  to='contact' smooth={true} duration={1500}><div className='navitem' onClick={() => { setIsopen(false) }}>Contact</div></Link>
        </div>
      </div>
      {show && <img className='stickyarr' src={leftarr} onClick={scroll.scrollToTop} alt='arrow' />}
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
