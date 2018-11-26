import React from "react";
import Header from "./HomeHeader";
import HomeContent from "./HomeContent";
import Footer from "./HomeFooter";
import "./stylesheet.css";

var mainStyle = {
  //backgroundImage: "url(${../..assets/forest.jpg})",
}

export default class HomeLayout extends React.Component {
  render() {
    return (
      <div style={mainStyle}>
        <div id="header">
          <Header />
        </div>
        <HomeContent />
        <Footer />



        </div>
    );
  }
}
