/* TODO: Move CSS to seperate file
  bgcolor: #f8fafa

*/

import React, { Component } from "react";
// Assets
import picture from "./Assets/avatar.jpg";
import githubIcon from "./Assets/github-icon.png"
// Modules
import "./App.css";
//import './index.css';

/* ---------- INLINE STYLING ----------*/
const headerTitle = {
  marginTop: "10%",
  textAlign: "center",
  fontSize: "30px"
};

const portraitStyle = {
  width: "220px",
  height: "200px",
  // marginLeft: "25%",
  // marginTop: "1%",
  display: "inline-block"
};

const bodyStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",

}

const projectsListStyle = {
  display: "inline-block",
  height: "200px",
  width: "300px",
};

const projectBox = {
  border: "1px solid black",
  listStyle: "none",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "left",

}

const projectBoxGitHubIcon = {
  width: "50px",
  height: "50px",
  float: "right",

}

const projectGitHubLink = {
  marginLeft: "80%",
  display: "inline-block",

}

/* ---------- CLASSES ----------*/
class Header extends Component {
  render() {
    return <p style={headerTitle}>Hi, I'm Andreas Amundsen</p>;
  }
}

// Portrait picture
class Portrait extends Component {
  render() {
    return <img style={portraitStyle} src={picture} alt="Portrait" />;
  }
}

class Footer extends Component {
  render() {
    return (
      <a href="https://github.com/aa1202/" target="_blank" rel="nofollow"><img style={projectBoxGitHubIcon} src={githubIcon} /></a>
    )
  }
}

// Project list
class ProjectsList extends Component {
  render() {
    return (
      <ul style={projectsListStyle}>
        <li style={projectBox}>
          DroneLOAN  
          <a href="https://github.com/Lekesoldat/DroneLOAN" target="_blank" rel="nofollow"><img style={projectBoxGitHubIcon} src={githubIcon} /></a>
        </li>
        
        <li style={projectBox}>
          NTNU Online Webcalendar
          <a href="https://github.com/aa1202/NTNU-Online-Webcal" style={projectGitHubLink} target="_blank" rel="nofollow"><img style={projectBoxGitHubIcon} src={githubIcon} /></a>
        </li>
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="body" style={bodyStyle}>
          <Portrait />
          <ProjectsList />
          
        </div>

        <Footer />
        
      </div>
    );
  }
}
export default App;
