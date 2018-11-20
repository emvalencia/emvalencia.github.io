import React from "react";

var linkStyle = {

}


export default class LinkBar extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td><a href="./index.html">Home</a></td>
            <td><a href="./pages/resume.html">Resume</a></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
