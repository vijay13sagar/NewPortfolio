import React, { useState } from "react";
import "../StyleSheet/Contact.css";

const Contact = () => {
    const [msg,setMsg]= useState('');
    const Greeting =(i)=>{
        if(i===1){
            setMsg("Visit my LinkedIn to learn more about me.");
        }
        if(i===2){
            setMsg("Check out my projects.");
        }
        if(i===3){
            setMsg("Feel free to contact me!");
        }
        if(i===4){
            setMsg("See my Codepen activities.");
        }
        if(i===0){
            setMsg("Hover the Cards");
        }
    }
  return (
    <div id='contact' className="images-leaning">
      <a href='https://codepen.io/vijay13sagar' target='_blank' rel="noopener noreferrer" onMouseOver={()=>Greeting(4)} onMouseLeave={()=>Greeting(0)}>
        <img
          className="leaned-image"
          src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3-9RoB0Qb6pw5kPdAxb-NjPguQk4LcpNN0SLGTlrZyYwDbTc2BIPw63tc27CidXxJVWd0IixPq3M7xOqKYQCxS7kYfYJKi1OSdEkuQi1gkfr-l9lpdV2v37i6VcawekzcklmjDHtTliIvGk87a1wefSDULpsRdrKw1AbxpJIN5wgIoHPc_7NpvvgmqQ/w532-h390/codepen.jpg'
          alt="Codepen"
        />
      </a>
      <a href='mailto:vijay13vidyasagar@gmail.com' target='_blank' rel="noopener noreferrer"onMouseOver={()=>Greeting(3)} onMouseLeave={()=>Greeting(0)}>
        <img
          className="leaned-image"
          src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEgYiW289_rMm28lQAm3cAOfoLkMMx76O1SiAH9Cqrb1zxqRauwqwsNgze5X_-QMlyf_yjajLTCGD9fz_qHs9_K1FwwL2nZfy4cf6Ma7hmcEdMFnghO7VTPXyfmSAgs82NgpEisRWSxeYpScy4t8bCaaJZlcLdgQrXjtp5YyZPJfjDn-7X-u5K2_H6pg/w597-h392/gmail.jpg'
          alt="Gmail"
        />
      </a>
      <a href='https://github.com/vijay13sagar' target='_blank' rel="noopener noreferrer" onMouseOver={()=>Greeting(2)} onMouseLeave={()=>Greeting(0)}>
        <img
          className="leaned-image"
          src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVzMYz5c8RR9X3bOs2f2WY9MVtrGoCFOVx51pYbZJ9Dd6oQvyU0M3znbe7pNlzE6YdBX8SN5fy6pR8jwJhLHZIKtVXFo5T_JrkliR5ynXDGgubqh-bZAhOHtOVoilDPXySbJidM4acrT98dRfob_rBnJDGOv9QSzq19KgG4qvbvkxkRTQ0zjpQEAI01g/w558-h279/github.png'
          alt="Github"
        />
      </a>
      <a href='https://www.linkedin.com/in/vizia-vidyasagar-kasina/' target='_blank' rel="noopener noreferrer" onMouseOver={()=>Greeting(1)} onMouseLeave={()=>Greeting(0)}>
        <img
          className="leaned-image"
          src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9sTreqzNprqtbrLCceXvKY5VwQq6AebLA_4vV-x9lZnOg9NAWMo63YysqHmGnZK279ArWualeXgdcBCLq2S0-Y43OmDvFIg9ej7WsJMosSyOvMG8xjzhCwqwo21dajKBjwBWBnuRoFy5gk1wJmPqiUpx1IatJo_ftQ4VWm_zWo_zgIfJKHRYIsXn01Q/w592-h296/linkedin.png'
          alt="Linkedin"
        />
      </a>
      
      <p className="contacthead">Contact</p>
    <p className="message">{msg}</p>
    </div>
  );
};

export default Contact;
