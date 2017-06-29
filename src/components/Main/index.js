import "./Main.css";

import React from "react";

import image from "../../static/images/pasta.jpg";

function times(n) {
  return [...Array(n).keys()];
}

const Main = () =>
  <main className="Main">
    <div className="Main__jumbo">
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu leo sed enim elementum
        congue.
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu leo sed enim elementum
        congue. Aliquam libero lacus, tempor quis magna vitae, sollicitudin mattis augue.
      </h2>
      <img src={image} />
      <div className="Main__jumbo--content">
        <hr />
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu leo sed enim elementum
          congue. Aliquam libero lacus, tempor quis magna vitae, sollicitudin mattis augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Donec eu leo sed enim elementum congue.
        </p>
      </div>
    </div>
    <div className="Main__grid">grid</div>
  </main>;

export default Main;
