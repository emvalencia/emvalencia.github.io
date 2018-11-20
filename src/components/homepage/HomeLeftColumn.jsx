import React from "react";

export default class LeftColumn extends React.Component {
  render() {
    return (
      <div>
        <h1>SKILLS</h1>
        <p>
          <h2>Languages</h2>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
        </p>
        <p>
          <h2>Technologies</h2>
          <li>React.js</li>
          <li>Postman testing</li>
          <li>MySQL and PostgreSQL</li>
          <li>Docker</li>
          <li>Virtual machine basics via VirtualBox</li>
        </p>
        <p>
            <h2>Courses</h2>
            <li>Python Programming (Accelerated)</li>
            <li>Intermediate Python Programming</li>
            <li>Java Programming: Objects</li>
            <li>Java Programming: Advanced Objects</li>
            <li>Java Programming: Data Structures</li>
            <li>Programming in C++ as a Second Language</li>
            <li>Computer Architecture</li>
            <li>Introduction to Database Management</li>
            <li>Introduction to Software Engineering</li>
            <li>Critical Writing for CS Majors</li>
        </p>
      </div>
    );
  }
}
