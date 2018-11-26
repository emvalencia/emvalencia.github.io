import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import "./stylesheet.css";

var footerStyle = {
    color: "#f5f5f5",
    backgroundColor: "#404040",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "Sans Serif",
    padding: "20px",
}

var iconStyle = {
    margin: "10px",
    color:"white",
}

export default class Footer extends React.Component {
    render() {
        return (
            <div style={footerStyle}>
                <a href="https://linkedin.com/in/emeryvalencia" style={iconStyle}><FaLinkedin size={40} /></a>
                <a href="https://github.com/emvalencia" style={iconStyle}><FaGithub size={40} /></a><br/>
                @Copyright. All rights reserved by Emery Valencia.
            </div>
        );
    }
}
{/* <a href="https://linkedin.com/in/emeryvalencia"><em class="fa fa-linkedin-square fa-2x" aria-hidden="true"></em></a>
<a href="https://github.com/emvalencia"><em class="fa fa-github fa-2x" aria-hidden="true"></em></a> */}
