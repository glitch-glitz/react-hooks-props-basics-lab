import React from "react";
import Links from "./Links"; // Import Links component

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>} {/* Conditional rendering */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />{" "}
      {/* Passing links to Links component */}
    </div>
  );
}

export default About;
