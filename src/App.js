import React, { Component } from "react";

import Button from 'react-bootstrap/Button';

// Assets
import githubIcon from "./Assets/github-icon.png"
import linkedInIcon from "./Assets/linkedin-icon.png"
import 'bootstrap/dist/css/bootstrap.min.css';

// Modules
import "./App.css";
//import './index.css';

/* ---------- INLINE STYLING ----------*/

const bodyStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "700px",

  color: "#606060",

}

const headerTextStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40px",

  height: "130px",
  
}

const aboutMeWrapper = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "500px",
  
}

const aboutMeText = {
  textAlign: "center",
  fontSize: "20px", 

}

const portraitStyle = {
  height: "278px",
  width: "278px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
};

const listStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  
}

const projectsWrapper = {
  height: "500px",
  
}

const projectListStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  textAlign: "center",
  alignItems: "center",
  height: "278px",
  marginLeft: "5%",
  marginRight: "5%",

  fontSize: "20px",

  borderLeft: "1px solid grey",
  borderRight: "1px solid grey",
  

}



const contactIconStyle = {
  width: "50px",
  height: "50px"
}


const contactWrapper = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "170px",
  
}

const contactIconWrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "auto",
  width: "200px"
 
}

/* ---------- CLASSES ----------*/
// Portrait picture
class Portrait extends Component {
  render() {
    return (

      <div>
        <div style={headerTextStyle}>
          Andreas Amundsen
          
        </div>

        <div style={aboutMeWrapper}>
          <div>
            <img style={portraitStyle} alt="Portrait" />
          </div>

        
          <div style={listStyle}>

            <div style={aboutMeText}>

              <p>Studerer informatikk på NTNU, andreåret</p>
              <p>Tidligere leder av Fag- og kurskomiteen i Online</p>
              <p>Vitenskapelig assistent i Kodeløypa</p>

            </div>
          </div>    
        </div>
      </div>
    )
  }
}

// Project list
class ProjectsList extends Component {
  render() {
    return (

      <div>

        <div style={headerTextStyle}>
          Noen av mine prosjekter
        </div>

        <div style={projectsWrapper}>
          <div style={projectListStyle}>
            
            <p>Webcalender for linjeforeningen Online sine arrangementer</p>
            <p>DroneLOAN - Utleie av droner</p>
            <p>Denne siden</p>

            
          </div>
        </div>
      </div>

      
    );
  }
}

class EmailButton extends Component {
  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.email = "andreas.amundsen123@gmail.com";
  }
  
  onClick() {
      window.location.href = `mailto:${this.email}`;
  }

  render()  {
      return <Button variant="outline-primary" size="lg" onClick={this.onClick}>Kontakt meg</Button>;
  }
}

class Contact extends Component {
  render() {
    return (
      <div style={contactWrapper}>
        <div style={contactIconWrapper}>
          <a href="https://github.com/aa1202">
            <img alt="GitHub icon" src={githubIcon} style={contactIconStyle}></img>

          </a>
          

          <a href="https://www.linkedin.com/in/andreas-amundsen/">
            <img alt="LinkedIN icon" src={linkedInIcon} style={contactIconStyle}></img>

          </a>

        
        </div>

        <EmailButton/>

      </div>
      
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div style={bodyStyle}>

        <Portrait />
        <ProjectsList />
        

      </div>


    );
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <Body/>
        <Contact/>
      </div>
    );
  }
}
export default App;
