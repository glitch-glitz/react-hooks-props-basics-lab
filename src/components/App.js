import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Links from "./Links";
import user from "../data/user";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
      
    </div>
  );
}

export default App;
