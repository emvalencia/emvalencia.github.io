import React from "react";
import "./stylesheet.css";

var attributes = {
    fontSize: "25px",
    fontFamily: "Sans Serif",
    textAlign: "center",
}

var emAttribute = {
  fontSize: "35px",
  fontFamily: "Sans Serif",
  textAlign: "center",
  fontWeight: "bold",
  color: "#75c6f4",
}

var h1 = {
    fontSize: "50px",
    fontFamily: "Sans Serif",
    textAlign: "center",
    fontWeight: "bold",
}

var container1 = {
  backgroundColor: "black",
}

var row1 = {
  backgroundColor: "#13263eb3",
  color: "whitesmoke",
  borderRadius: "15px",
  textAlign: "center",
  padding: "2%",
  margin: "1%",
}

export default class HomeContent extends React.Component {
  render() {
    return (
      <div class="container-fluid" style={container1}>

        <div row style={row1}>
          <h1 style={h1}>~ Who I Am ~</h1>
          <div style={Object.assign({}, emAttribute, {color: "white"})}>
              <p>Dedicated</p>
              <p>Team Player</p>
              <p>Dog Lover</p>
              <p>Video Game Enthusiast</p>
          </div>
        </div>

        <div row style={row1}>
          <h1 style={h1}>~ What I Value ~</h1>
          <div style={attributes}>
            <p><span style={emAttribute}>Passion</span> - for the work I do and how I live my life</p>
            <p><span style={emAttribute}>Education</span> - because it encourages growth and challenges me in new
              ways</p>
            <p><span style={emAttribute}>Sustainability</span> - to protect the environment I live in</p>
            <p><span style={emAttribute}>Community Service</span> - to encourage connectivity and give back to others</p>
          </div>
        </div>

        <div row style={row1}>
          <h1 style={h1}>~ What I Bring ~</h1>
          <div style={attributes}>
            <p>* Comprehensive Computer Science education at UCI</p>
            <p>* Previous research experience and a biological education from UCLA</p>
            <p>* Over 4 years experience in customer experience</p>
            <p>* Over 3 years experience in quality assurance and documentation</p>
            <p>* Additionally... 4+ years as a professional barista (coffee!)</p>
          </div>
        </div>




      </div>




    );
    }
}
