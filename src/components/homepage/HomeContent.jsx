import React from "react";
import { Parallax } from "react-parallax";
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

var row1 = {
  backgroundColor: "#404040",
  color: "whitesmoke",
  textAlign: "center",
}

var defaultEx = {
  backgroundColor: "#404040",
}

var innerDiv = {
  backgroundColor: "#404040",
  position: "relative",
  top: "50%"
}

export default class HomeContent extends React.Component {
  render() {
    return (

      <div style={defaultEx}>

      {/*Parallax background component*/}
      <Parallax
            bgImage={require('../../assets/spring.jpg')}
            strength={400}
        >
            <div style={{ height: '300px' }} />
        </Parallax>

      {/*Static component*/}   {/*TO DO: Make component box cream-colord */}
        <div row style={row1}>
            <h1 style={h1}>~ Who I Am ~</h1>
            <div style={Object.assign({}, emAttribute, {color: "white"})}>
                <p>Dedicated</p>
                <p>Team Player</p>
                <p>Dog Lover</p>
                <p>Video Game Enthusiast</p>
            </div>
        </div>

              {/*Parallax background component*/}
      <Parallax
            bgImage={require('../../assets/spring.jpg')}
            strength={400}
        >
            <div style={{ height: '300px' }} />
        </Parallax>

        {/*Parallax background component*/}
         <Parallax
            bgImage={require('../../assets/forest.jpg')}
            strength={400}        >
          <div style={{ height: '300px' }} />
        </Parallax>

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

         
        {/*Parallax background component*/}
        <Parallax
            bgImage={require('../../assets/forest.jpg')}
            strength={400}        >
          <div style={{ height: '300px' }} />
        </Parallax>

      {/*Parallax background component*/}
        <Parallax
            bgImage={require('../../assets/mountain.jpg')}
            strength={400}
            blur={{ min: -15, max: 15 }}
        >
          <div style={{ height: '300px' }} />
        </Parallax>

      {/*Static component*/}
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

         {/*Parallax background component*/}
        <Parallax
            bgImage={require('../../assets/mountain.jpg')}
            strength={400}
            blur={{ min: -15, max: 15 }}
        >
          <div style={{ height: '300px' }} />
        </Parallax>

        {/* Parallax background component
        <Parallax
          bgImage={require('../../assets/mountain.jpg')}
          strength={400}
          blur={{ min: -15, max: 15 }}
        >
        {/*Static component
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

          <div style={{ height: '300px' }} />
        </Parallax> */}

      </div>

    );
    }
}
