import React from "react";
import "./stylesheet.css";
var footerStyle = {
    color: "#f5f5f5",
    backgroundColor: "black",
    fontSize: "1.5em",
    textAlign: "center",
    fontFamily: "Sans Serif",
    padding: "1em",
}

export default class Footer extends React.Component {
    render() {
        return (
            <div style={footerStyle}>
                <a href="https://linkedin.com/in/emeryvalencia">LinkedIn    </a>
                <a href="https://github.com/emvalencia">GitHub</a><br/>
                @Copyright. All rights reserved by Emery Valencia.
            </div>
        );
    }
}
{/* <a href="https://linkedin.com/in/emeryvalencia"><em class="fa fa-linkedin-square fa-2x" aria-hidden="true"></em></a>
<a href="https://github.com/emvalencia"><em class="fa fa-github fa-2x" aria-hidden="true"></em></a> */}
