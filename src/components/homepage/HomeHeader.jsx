import React from "react";

var headerStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "darkgrey",
  color: "whitesmoke",
  textAlign: "center",
}

var welcomeStatement = {
  position: "absolute",  top: "5%", left: "5%",
  fontSize: "4.5em",
  fontFamily: "Sans Serif",
}

export default class Header extends React.Component {
  render() {
    return (

      <div>
        <div style={headerStyle}>
        { <img
          src={require("../../assets/carefree.jpg")}
          alt=""
          id="profilePic"
        /> }
          <div style={welcomeStatement}>
            Hey there, <br/> 
            I'm Emeryyyy
          </div>
        </div>
      </div>

    );
  }
}
